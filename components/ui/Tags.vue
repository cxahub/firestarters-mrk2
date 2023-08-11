<template>
  <div class="block w-full float-left" v-html="splitJoin(tags, color)"></div>
</template>

<script>
export default {
  props: {
    tags: { type: String },
    color: { type: Boolean },
  },

  methods: {
    splitJoin(str, color) {
      let badge = "";
      let style = "";
      const list = str.split(", ");

      if (color) {
        style =
          "block float-left font-roboto-condensed font-bold lowercase text-sm rounded-full px-3 py-1 mr-1 my-1 bg-white text-fs-blue";
      } else {
        style =
          "block float-left font-roboto-condensed font-bold lowercase text-sm rounded-full px-3 py-1 mr-1 my-1 bg-fs-blue text-white";
      }

      list.forEach(function (tag) {
        badge = badge + '<span class="' + style + '">' + tag + "</span>";
      });

      return badge;
    },
  },
};
</script>
