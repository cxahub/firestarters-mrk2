<template>
  <div>
    <div class="flex" v-if="type === 'h1'">
      <div
        class="flex-none lg:bg-2r sm:bg-1-5r lg:w-10 lg:h-10 sm:w-6 sm:h-6 mr-2 mt-1 bg-no-repeat"
        :style="bgImage"
      ></div>
      <div class="flex-auto">
        <h1 class="lg:text-4xl sm:text-2xl font-bold uppercase" :class="color">
          {{ text }}
        </h1>
      </div>
    </div>
    <div class="flex" v-if="type === 'h2'">
      <div
        class="flex-none lg:bg-1-5r sm:bg-1r lg:w-6 lg:h-6 sm:w-4 sm:h-4 mr-2 mt-1 bg-no-repeat"
        :style="bgImage"
      ></div>
      <div class="flex-auto">
        <h1 class="lg:text-3xl sm:text-xl font-bold uppercase" :class="color">
          {{ text }}
        </h1>
      </div>
    </div>
    <div class="flex" v-if="type === 'h3'">
      <div
        class="flex-none lg:bg-1-5r sm:bg-1r lg:w-6 lg:h-6 sm:w-4 sm:h-4 mr-2 mt-1 bg-no-repeat"
        :style="bgImage"
      ></div>
      <div class="flex-auto">
        <h1 class="lg:text-2xl sm:text-lg font-bold uppercase" :class="color">
          {{ text }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import diamondIcon from "/images/svg/diamond-icon.svg";
import flashIcon from "/images/svg/flash-bolt-icon.svg";

const props = defineProps({
  text: { type: String },
  type: { type: String, default: "h1" },
  color: { type: String, default: "text-black" },
  icon: { type: String, default: diamondIcon },
});

const bgImage = {
  "background-image": `url(${props.icon})`,
};
</script>
