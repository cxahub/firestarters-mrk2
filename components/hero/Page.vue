<template>
  <div
    class="container mx-auto relative block top-0 overflow-hidden mt-0 mb-0 lg:py-16 sm:py-4 rounded-b-lg"
    :style="bgImage"
  >
    <img
      role="img"
      class="absolute top-0 left-0 right-0 w-full bg-fs-brown opacity-30"
      src="/images/svg/x-background.svg"
      loading="lazy"
      aria-label="background icon"
    />
    <div class="mx-auto relative">
      <h1
        class="text-roboto lg:text-7xl sm:text-5xl font-black text-white uppercase mt-24 mb-12"
        v-html="pageTitle"
      ></h1>
      <div v-if="pageSubTitle != ''">
        <UiTitleIcon :text="pageSubTitle" type="h2" color="text-white" />
        <div
          class="mx-auto text-white lg:text-xl sm:text-lg py-6"
          v-if="pageSubTitle != ''"
        >
          {{ pageMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

const props = defineProps({
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
});

const bgImage = {
  "background-position": "center center",
  "background-size": "cover",
  "background-image": `url(${getImage(props.pageImage)})`,
};

function getImage(file) {
  const imageURL = file;
  return imageURL;
}
</script>
