<template>
  <div class="block w-full float-left" v-html="splitJoin(tags)"></div>
</template>

<script>
export default {
  props: {
    tags: { type: String },
  },

  methods: {
    splitJoin(str) {
      let badge = "";
      const list = str.split(", ");

      list.forEach(function (tag) {
        badge =
          badge +
          '<span class="block float-left font-roboto-condensed lowercase text-sm rounded-full text-white bg-fs-blue px-3 py-1 mr-1 my-1">' +
          tag +
          "</span>";
      });

      return badge;
    },
  },
};
</script>
