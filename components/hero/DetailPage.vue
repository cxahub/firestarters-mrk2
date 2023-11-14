<template>
  <div
    class="container mx-auto relative block top-0 overflow-hidden mt-0 mb-0 lg:py-16 sm:py-4 rounded-b-lg"
    :style="bgImage"
  >
    <img
      role="img"
      class="absolute top-0 left-0 right-0 w-full bg-fs-brown opacity-70"
      src="/images/svg/x-background.svg"
      loading="lazy"
      aria-label="background icon"
    />
    <div class="mx-auto relative">
      <h1
        class="text-roboto lg:text-6xl sm:text-3xl font-black text-white uppercase mt-24 mb-12"
        v-html="pageTitle"
      ></h1>

      <div class="grid grid-cols-3 gap-8">
        <div class="col-span-2">
          <!--Industry relationship-->
          <InsightIndustryRel
            v-if="pageIndustry != ''"
            :insightID="parseInt(pageID)"
            color="true"
          />

          <!--Insight tags-->
          <UiTags :tags="pageTags" color="true" class="my-6" />

          <!--Insight caption (summary)-->
          <div class="text-3xl text-white font-bold uppercase">Summary</div>
          <div
            class="text-white text-lg my-4"
            v-html="formatPageCaption(pageCaption)"
          ></div>

          <div class="pb-4">
            <NuxtLink to="#article" class="text-fs-yellow font-bold text-lg"
              >Read More</NuxtLink
            >
          </div>

          <div v-if="pageTypeID === 4" class="py-4">
            <UiButton text="Return to Academy" path="/academy" />
          </div>

          <div v-else-if="pageTypeID == 1 || pageTypeID == 2" class="py-4">
            <UiButton text="Return to Events" path="/events" />
          </div>

          <div v-else class="py-4">
            <UiButton text="Return to Insights" path="/insights" size="small" />
          </div>
        </div>
        <div>
          <!--Insight author and date info-->
          <SocialUser
            v-if="pageAuthorID != 0"
            :userID="parseInt(pageAuthorID)"
            :imgtPath="pageAuthorImagePath"
            :imgFile="pageAuthorImageFile"
            :authorFirstName="pageAuthorFName"
            :authorLastName="pageAuthorLName"
            :datePosted="pageDate"
            :readTime="pageReadTime"
            :color="true"
          />
          <InsightStats v-if="showInsightStats" :ref_id="parseInt(pageID)" />
          <SocialTag
            :title="pageTitle"
            :caption="pageCaption"
            :showShare="true"
            :showTwitter="false"
            :showFacebook="false"
            :showLinkedIn="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

const props = defineProps({
  pageID: {
    type: Number,
    default: 0,
  },

  pageTypeID: {
    type: Number,
    default: 0,
  },

  pageType: {
    type: String,
    default: "",
  },

  pageImagePath: {
    type: String,
    default: "",
  },

  pageImageFile: {
    type: String,
    default: "",
  },

  pageTitle: {
    type: String,
    default: "",
  },

  pageIndustry: {
    type: String,
    default: "Retail",
  },

  pageDate: {
    type: String,
    default: "",
  },

  pageReadTime: {
    type: String,
    default: "",
  },

  showInsightStats: {
    type: Boolean,
  },

  pageTags: {
    type: String,
    default: "",
  },

  pageCaption: {
    type: String,
    default: "",
  },

  pageAuthorID: {
    type: String,
    default: "",
  },

  pageAuthorFName: {
    type: String,
    default: "",
  },

  pageAuthorLName: {
    type: String,
    default: "",
  },

  pageAuthorImagePath: {
    type: String,
    default: "",
  },

  pageAuthorImageFile: {
    type: String,
    default: "",
  },
});

const bgImage = {
  "background-position": "center center",
  "background-size": "cover",
  "background-image": `url(${getImage(
    props.pageImagePath,
    props.pageImageFile
  )})`,
};

function getImage(path, file) {
  const imageURL =
    config.public.CDN_URL +
    "/" +
    config.public.CDN_REPOSITORY_PATH +
    "/image/" +
    path +
    "/" +
    file;

  return imageURL;
}

function formatPageCaption(str) {
  if (str.length > 256) {
    return (str = str.substring(0, 256) + "...");
  } else {
    return str;
  }
}
</script>
