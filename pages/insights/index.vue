<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto py-8">
    <div class="grid grid-cols-1 py-4">
      <InsightSearch v-model:kw="kw" v-model:industry="industry" />
      <InsightMain v-if="kw == '' && industry == 0" />
      <InsightCard :kw="kw" :industry="industry" />
    </div>
  </main>
</template>

<script>
//Import image(s).
import pageImage from "/images/banner/page-banner-insights.jpg";

export default {
  setup() {
    useHead({
      title: "Insights - Firestarters",
      meta: [
        {
          name: "description",
          content:
            "Members are welcome at anytime to jump on the site and review content, best practices, and engage with other members.",
        },
      ],
    });
  },
  data() {
    return {
      pageImage: pageImage,
      pageTitle:
        "Discover Whats Happening Around <span class='text-fs-yellow'>You.</span>",
      pageSubTitle: "Submit Your Insights",
      pageMessage:
        "Members are welcome at anytime to jump on the site and review content and (coming soon) submit your own articles, best practices, and engage with other members.",
      kw: "",
      industry: 0,
    };
  },
};
</script>
