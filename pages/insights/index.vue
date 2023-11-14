<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto py-8">
    <div class="grid grid-cols-1 py-4">
      <InsightSearch
        v-model:kw="kw"
        v-model:industry="industry"
        @input="emitQueryKW"
        @change="emitQueryIndustry"
      />
      <InsightMain v-if="kw == '' && industry == 0" />
      <InsightCard
        :insightsPath="insightsPath"
        :kw="kw"
        :industry="industry"
        @input="emitQueryKW"
        @change="emitQueryIndustry"
      />
    </div>
  </main>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

//Import image(s).
import pageImageFile from "/images/banner/page-banner-insights.jpg";

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

const pageImage = ref(pageImageFile);
const pageTitle = ref(
  "Discover Whats Happening Around <span class='text-fs-yellow'>You.</span>"
);
const pageSubTitle = ref("Submit Your Insights");
const pageMessage = ref(
  "Members are welcome at anytime to jump on the site and review content and (coming soon) submit your own articles, best practices, and engage with other members."
);
let kw = ref("");
let industry = ref(0);
let insightsPath = ref(
  `${config.public.API_URL}/${config.public.API_CONTENT_ROUTE}`
);

function emitQueryKW(value) {
  insightsPath.value = `${config.public.API_URL}/${config.public.API_CONTENT_INDUSTRY_REL_ROUTE}`;
  kw.value = value;
}

function emitQueryIndustry(value) {
  insightsPath.value = `${config.public.API_URL}/${config.public.API_CONTENT_INDUSTRY_REL_ROUTE}`;
  industry.value = value;
}
</script>
