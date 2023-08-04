<template>
  <NuxtLink
    :to="path"
    class="block float-left font-bold uppercase rounded-lg"
    :class="type === 'primary' ? primaryBtn : secondaryBtn"
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
    target: { type: String, default: "_parent" },
  },

  data() {
    return {
      primaryBtn: "bg-fs-yellow hover:bg-fs-yellow-light py-4 px-4 my-5",
      secondaryBtn:
        "bg-white border border-fs-brown hover:bg-fs-brown hover:text-white py-4 px-4 my-5",
    };
  },
};
</script>
