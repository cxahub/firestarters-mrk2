<template>
  <div
    class="container mx-auto relative block top-0 z-10 overflow-hidden mt-0 mb-0 bg-fs-brown bg-cover lg:py-16 sm:py-4 rounded-b-lg"
    :style="bgImage"
  >
    <img
      role="img"
      class="absolute top-0 left-0 right-0 w-full z-0 pointer-events-none"
      src="~@/assets/svg/x-background.svg"
      loading="lazy"
      aria-label="background icon"
    />
    <div class="mx-auto">
      <h1
        class="text-roboto lg:text-7xl sm:text-5xl font-black text-white uppercase mt-24 mb-12"
        v-html="pageTitle"
      ></h1>
      <div v-if="pageSubTitle != ''">
        <UiDiamond :text="pageSubTitle" type="h2" color="text-white" />
        <div
          class="mx-auto text-white lg:text-xl sm:text-lg font-roboto-condensed py-6"
          v-if="pageSubTitle != ''"
        >
          {{ pageMessage }}
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
