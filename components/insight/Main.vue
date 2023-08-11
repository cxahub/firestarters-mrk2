<template>
  <div v-if="pending">
    <UiLoader />
  </div>
  <div v-else>
    <div class="grid grid-cols-1">
      <div class="py-4" v-if="insights.length !== 0">
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
            <InsightIndustryRel :insightID="parseInt(insight.c_id)" />

            <!--Insight caption-->
            <div class="block float-left w-full pt-4 pb-8">
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

            <div class="block float-left w-full pt-8 pb-4">
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
  </div>

  <!--Event information-->
  <div class="grid grid-cols-1 border-b-2 py-8">
    <div class="py-2">
      <UiTitleIcon text="Insight Information" />
    </div>
    <div class="py-4">
      Members are welcome at anytime to jump on the site and review content and
      (coming soon) submit your own articles, best practices, and engage with
      other members.
    </div>
    <div class="py-4">
      <UiButton text="More Insights" path="/insights" type="secondary" />
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  setup() {
    //Get runtime config.
    const config = useRuntimeConfig();

    function dateFormat(value) {
      return moment(value).format(config.public.VUE_APP_DATEFORMAT);
    }

    //Fetch data.
    const { pending, data: insights } = useLazyFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_CONTENT_ROUTE,
      {
        query: {
          c_date_gte: dateFormat(Date.now()),
          c_date_exp: dateFormat(Date.now()),
          status_id: 1,
          order_by: "c_date_posted DESC",
        },
      }
    );
    return {
      config,
      insights,
      pending,
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
