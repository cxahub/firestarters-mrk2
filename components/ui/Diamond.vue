<template>
  <div class="py-2">
    <div
      class="block float-left bg-[url('/assets/svg/diamond-icon.svg')] lg:bg-2r sm:bg-1-5r lg:w-10 lg:h-10 sm:w-6 sm:h-6 mr-2 mt-1 bg-no-repeat"
    ></div>
    <div v-if="type === 'h1'">
      <h1 class="lg:text-4xl sm:text-2xl font-bold uppercase" :class="color">
        {{ text }}
      </h1>
    </div>
    <div v-if="type === 'h2'">
      <h2 class="lg:text-4xl sm:text-2xl font-bold uppercase" :class="color">
        {{ text }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String },
    type: { type: String, default: "h1" },
    color: { type: String, default: "text-black" },
  },
};
</script>
