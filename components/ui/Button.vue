<template>
  <NuxtLink
    :to="path"
    class="max-w-max font-bold uppercase rounded-lg"
    :class="
      type === 'primary'
        ? size === 'small'
          ? primaryBtnSmall
          : primaryBtn
        : size === 'small'
        ? secondaryBtnSmall
        : secondaryBtn
    "
    role="button"
    :target="target"
    >{{ text }}</NuxtLink
  >
</template>

<script>
export default {
  props: {
    text: { type: String },
    path: { type: String },
    type: { type: String, default: "primary" },
    size: { type: String },
    target: { type: String, default: "_parent" },
  },

  data() {
    return {
      primaryBtn:
        "bg-fs-yellow hover:bg-fs-yellow-light lg:text-base sm:text-sm lg:py-4 lg:px-4 lg:my-5 sm:py-3 sm:px-3 sm:my-3",
      primaryBtnSmall:
        "bg-fs-yellow hover:bg-fs-yellow-light text-sm py-3 px-3 my-3",
      secondaryBtn:
        "bg-white border border-fs-brown hover:bg-fs-brown hover:text-white lg:text-base sm:text-sm lg:py-4 lg:px-4 lg:my-5 sm:py-3 sm:px-3 sm:my-3",
      secondaryBtnSmall:
        "bg-white border border-fs-brown hover:bg-fs-brown hover:text-white text-sm py-3 px-3 my-3",
    };
  },
};
</script>
