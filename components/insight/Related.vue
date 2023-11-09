<template>
  <div v-if="pending">
    <UiLoader />
  </div>
  <div v-else>
    <div v-if="insights.length > 0">
      <h1 class="text-2xl font-bold capitalize py-2">Related Insights</h1>
    </div>
    <div v-for="(insight, index) in insights" :key="insight.id">
      <NuxtLink
        :to="`/insights/${insight.related_c_id}/${insight.related_c_canonical_title}`"
      >
        <div
          class="block float-left bg-neutral-600 shadow-lg pb-4 mb-8 rounded-xl"
          :style="{
            'background-color': adColor.at(index),
            'background-image': `url(/images/bg/${adBGTexture.at(index)})`,
          }"
        >
          <!--
          <NuxtImg
            :src="getImage(insight.related_imgt_path, insight.related_img_file)"
            loading="lazy"
            class="relative mx-auto rounded-xl w-full"
            aria-label="advisor image"
          />
        -->
          <img
            :src="getImage(insight.related_imgt_path, insight.related_img_file)"
            loading="lazy"
            class="relative mx-auto rounded-xl w-full"
            aria-label="advisor image"
          />
          <div>
            <h1 class="text-3xl text-white font-bold text-center px-6 py-4">
              {{ insight.related_c_title }}
            </h1>
          </div>

          <div class="px-6">
            <SocialUser
              :userID="parseInt(insight.related_user_id)"
              :imgtPath="insight.related_author_imgt_path"
              :imgFile="insight.related_author_img_file"
              :authorFirstName="insight.related_author_last_name"
              :authorLastName="insight.related_author_first_name"
              :datePosted="insight.related_c_date_posted"
              :readTime="insight.related_c_read_time"
              color="true"
            />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    c_id: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    //Get runtime config.
    const config = useRuntimeConfig();

    //Fetch data.
    const { pending, data: insights } = useLazyFetch(
      config.public.API_URL + "/" + config.public.API_CONTENT_RELATED_REL_ROUTE,
      {
        query: {
          c_id: props.c_id,
          status_id: 1,
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
    return {
      adColor: ["#EA5F0F", "#363031", "#D52828"],
      adBGTexture: [
        "bg-texture-01.png",
        "bg-texture-02.png",
        "bg-texture-03.png",
      ],
    };
  },

  methods: {
    getImage(path, file) {
      const imageURL =
        this.config.public.CDN_URL +
        "/" +
        this.config.public.CDN_REPOSITORY_PATH +
        "/image/" +
        path +
        "/" +
        file;

      return imageURL;
    },
  },
};
</script>
