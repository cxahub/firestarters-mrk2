<template>
  <div
    class="container mx-auto relative block top-0 z-10 overflow-hidden mt-0 mb-0 bg-fs-brown bg-cover lg:py-16 sm:py-4 rounded-b-lg"
    :style="bgImage"
  >
    <NuxtImg
      role="img"
      class="absolute top-0 left-0 right-0 w-full z-0 pointer-events-none"
      src="/images/svg/x-background.svg"
      loading="lazy"
      aria-label="background icon"
    />
    <div class="mx-auto">
      <h1
        class="font-roboto-condensed lg:text-[5rem] sm:text-5xl font-black text-white uppercase mt-24 mb-12"
        v-html="pageTitle"
      ></h1>
      <div v-if="pageSubTitle != ''">
        <UiTitleIcon :text="pageSubTitle" type="h2" color="text-white" />
        <div
          class="mx-auto text-white lg:text-xl sm:text-lg font-roboto-condensed py-6 px-2"
          v-if="pageMessage != ''"
        >
          {{ pageMessage }}
        </div>

        <div
          class="mx-auto text-white lg:text-xl sm:text-lg font-roboto-condensed pb-10 px-2"
          v-if="pageLink != ''"
        >
          <NuxtLink
            class="text-fs-yellow lg:text-xl sm:text-lg"
            :to="pageLink"
            :data-toggle="pageLinkType"
            :data-target="pageLinkTarget"
            >{{ pageLinkTitle }}</NuxtLink
          >
        </div>
      </div>
      <div class="pt-6" v-if="pageSubTitle2 != ''">
        <UiTitleIcon :text="pageSubTitle2" type="h2" color="text-white" />
        <div
          class="mx-auto text-white lg:text-xl sm:text-lg font-roboto-condensed py-6 px-2"
          v-if="pageMessage2 != ''"
        >
          {{ pageMessage2 }}
        </div>
        <div
          class="mx-auto text-white lg:text-xl sm:text-lg font-roboto-condensed pb-10 px-2"
          v-if="pageLink2 != ''"
        >
          <NuxtLink
            class="text-fs-yellow lg:text-xl sm:text-lg"
            :to="pageLink2"
            :data-toggle="pageLinkType"
            :data-target="pageLinkTarget"
            >{{ pageLinkTitle2 }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageImage: {
      type: String,
      default: "",
    },

    pageTitle: {
      type: String,
      default: "",
    },

    pageSubTitle: {
      type: String,
      default: "",
    },

    pageMessage: {
      type: String,
      default: "",
    },

    pageLink: {
      type: String,
      default: "",
    },

    pageLinkTitle: {
      type: String,
      default: "",
    },

    pageLinkType: {
      type: String,
      default: "",
    },

    pageLinkTarget: {
      type: String,
      default: "",
    },

    pageSubTitle2: {
      type: String,
      default: "",
    },

    pageMessage2: {
      type: String,
      default: "",
    },

    pageLink2: {
      type: String,
      default: "",
    },

    pageLinkTitle2: {
      type: String,
      default: "",
    },

    pageLinkType2: {
      type: String,
      default: "",
    },

    pageLinkTarget2: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      bgImage: {
        "background-size": "cover",
        "background-image": `url(${this.pageImage})`,
      },
    };
  },
};
</script>
