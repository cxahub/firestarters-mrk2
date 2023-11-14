<template>
  <div v-if="pending">
    <UiLoader />
  </div>
  <div v-else>
    <div class="grid grid-cols-1">
      <div v-for="insight in insights" :key="insight.id">
        <MetaHead
          :title="insight.c_title"
          :description="insight.c_caption"
          :ogImageTypePath="insight.imgt_path"
          :ogImage="insight.img_file"
        />

        <HeroDetailPage
          :pageID="parseInt(insight.c_id)"
          :pageTypeID="parseInt(0)"
          pageType="insight"
          :pageImagePath="insight.imgt_path"
          :pageImageFile="insight.img_file"
          :pageTitle="insight.c_title"
          :pageIndustry="`<span class='fs-yellow'>${insight.i_name}</span>`"
          :pageCaption="`${insight.c_caption}`"
          :pageDate="insight.c_date_posted"
          :pageReadTime="insight.c_read_time"
          :showInsightStats="true"
          :pageTags="insight.c_tag"
          :pageAuthorID="insight.author_user_id"
          :pageAuthorFName="`${insight.author_first_name}`"
          :pageAuthorLName="`${insight.author_last_name}`"
          :pageAuthorImagePath="insight.author_imgt_path"
          :pageAuthorImageFile="insight.author_img_file"
        />
        <main id="article" class="container mx-auto py-8">
          <div
            class="py-4 text-lg"
            :class="showTitle > 200 ? 'hide-title-scroll' : `show-title-scroll`"
          >
            ▼ Scroll to continue with the article...
          </div>
          <div
            :class="showTitle > 200 ? 'show-title-scroll' : `hide-title-scroll`"
          >
            <div class="grid grid-cols-3 gap-12">
              <!--Column 1-->
              <div class="col-span-2">
                <div class="py-4">
                  <!--Insight Title-->
                  <h1 class="text-5xl font-bold uppercase">
                    {{ insight.c_title }}
                  </h1>
                </div>

                <div class="block w-full py-4 mb-8">
                  <SocialUser
                    :userID="parseInt(insight.author_user_id)"
                    :imgtPath="insight.author_imgt_path"
                    :imgFile="insight.author_img_file"
                    :authorFirstName="insight.author_first_name"
                    :authorLastName="insight.author_last_name"
                    :datePosted="insight.c_date_posted"
                    :readTime="insight.c_read_time"
                  />

                  <div class="block float-right py-8">
                    <InsightDocument
                      :insightID="parseInt(insight.id)"
                      size="small"
                      format="primary"
                    />
                  </div>
                </div>

                <div v-for="video in videos" :key="video.id" class="pt-20">
                  <VideoPlayer
                    :videoSrc="video.vst_url + video.v_source_id"
                    :videoTitle="video.c_title"
                  />
                </div>

                <div class="block py-16" v-html="insight.c_story"></div>

                <div class="py-4">
                  <a href="#article" class="link">Top ▲</a> |
                  <NuxtLink
                    :to="`${feedbackURL}?insightTitle=${insight.c_title}`"
                    target="_blank"
                    >Feedback</NuxtLink
                  >
                </div>

                <div class="py-4">
                  <Conversation
                    :ref_id="parseInt(insight.c_id)"
                    :title="insight.c_title"
                    :canonicalTitle="insight.c_canonical_title"
                  />
                </div>
              </div>
              <!--Column 2-->
              <div>
                <AdMembership class="mb-8" />
                <AdFeedbackSurvey class="mb-8" />
                <InsightRelated :c_id="parseInt(insight.c_id)" class="mb-8" />
                <AdAcademy class="mb-8" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    //Get runtime config.
    const config = useRuntimeConfig();
    const route = useRoute();
    const host = useRequestURL().origin + useRequestURL().pathname;

    //Fetch data.
    const { pending, data: insights } = useLazyFetch(
      config.public.API_URL + "/" + config.public.API_CONTENT_ROUTE,
      {
        query: {
          id: route.params.id,
          status_id: 1,
        },
      }
    );

    //Fetch video data.
    const { pending: pending2, data: videos } = useLazyFetch(
      config.public.API_URL +
        "/" +
        config.public.API_CONTENT_VIDEO_REL_ROUTE +
        "/?c_id=" +
        route.params.id
    );

    const feedbackURL = config.public.FIRESTARTERS_FEEDBACK_SURVEY_URL;

    return {
      config,
      insights,
      videos,
      feedbackURL,
      host,
    };
  },

  data() {
    return {
      showTitle: 0,
    };
  },

  methods: {
    handleScroll() {
      this.showTitle = window.scrollY;
    },
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
