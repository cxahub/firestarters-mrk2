<template>
  <div class="grid grid-cols-1">
    <div class="py-2" v-if="insights.length !== 0">
      <UiTitleIcon text="Our Latest Insights" />
    </div>
    <div>
      <div v-for="(insight, index) in insights" :key="insight.id">
        <div v-if="index == 0">
          <NuxtLink
            :to="`/insights/${insight.c_id}/${insight.c_canonical_title}`"
          >
            <NuxtImg
              role="img"
              loading="lazy"
              :src="getImage(insight.imgt_path, insight.img_file)"
              class="block rounded-lg w-full"
              aria-label="insight image"
            />
          </NuxtLink>

          <!--Insight title-->
          <h1 class="font-black uppercase text-5xl py-4">
            <NuxtLink
              :to="`/insights/${insight.c_id}/${insight.c_canonical_title}`"
              >{{ insight.c_title }}</NuxtLink
            >
          </h1>

          <!--Insight tags-->
          <UiTags :tags="insight.c_tag" />

          <!--Insight industry-->
          <InsightIndustryRel :insightid="parseInt(insight.c_id)" />

          <!--Insight caption-->
          <div class="block float-left w-full py-2">
            {{ insight.c_caption }}
          </div>

          <!--Insight author and date info-->
          <SocialUser
            :userID="parseInt(insight.author_user_id)"
            :imgtPath="insight.author_imgt_path"
            :imgFile="insight.author_img_file"
            :authorFirstName="insight.author_first_name"
            :authorLastName="insight.author_last_name"
            :datePosted="insight.c_date_posted"
            :readTime="insight.c_read_time"
          />

          <div class="block float-left w-full">
            <UiButton
              text="Read the Full Insight"
              :path="
                '/insights/' + insight.c_id + '/' + insight.c_canonical_title
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Event information-->
  <div class="grid grid-cols-1 border-b-2">
    <div class="py-5">
      <UiTitleIcon text="Insight Information" />
    </div>
    <div>
      <p>
        Members are welcome at anytime to jump on the site and review content
        and (coming soon) submit your own articles, best practices, and engage
        with other members.
      </p>
      <NuxtLink
        to="/insights"
        class="block float-left bg-white border border-fs-brown hover:bg-fs-brown hover:text-white font-bold uppercase py-4 px-4 my-5 rounded-lg"
        role="button"
        >More Insights</NuxtLink
      >
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  setup() {
    //Get runtime config.
    const config = useRuntimeConfig();

    //Fetch event data.
    const { data: insights } = useFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_CONTENT_ROUTE
    );
    return {
      config,
      insights,
    };
  },

  data() {
    return {};
  },

  methods: {
    dateFormat(value) {
      return moment(value).format(this.dateFormatter);
    },

    getImage(path, file) {
      const imageURL =
        this.config.public.VUE_APP_CDN_URL +
        "/" +
        this.config.public.VUE_APP_CDN_REPOSITORY_PATH +
        "/image/" +
        path +
        "/" +
        file;

      return imageURL;
    },
  },

  computed: {
    dateFormatter() {
      return this.$config.public.VUE_APP_DATEFORMAT;
    },
  },
};
</script>
