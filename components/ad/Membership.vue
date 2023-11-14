<template>
  <div
    class="block float-left text-center bg-neutral-600 shadow-lg px-16 py-10 rounded-xl"
    :style="bgImage"
  >
    <div class="py-4">
      <h1 class="text-4xl font-bold text-white capitalize">
        Become a Firestarters Member Today!
      </h1>
    </div>
    <div class="py-4 text-xl text-white">
      Learn, discuss and connect with your industry peers.
    </div>
    <div class="block py-4 mx-auto">
      <UiButton text="Join Now!" path="/register" />
    </div>
  </div>
</template>

<script setup>
import bgImageFile from "/images/bg/bg-texture-07.png";

const bgImage = {
  "background-position": "center center",
  "background-size": "cover",
  "background-image": `url(${bgImageFile})`,
};
</script>
