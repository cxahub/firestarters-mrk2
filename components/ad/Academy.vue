<template>
  <div
    class="block float-left text-center bg-neutral-600 shadow-lg px-16 py-10 rounded-xl"
    :style="bgImage"
  >
    <div class="py-4">
      <h1 class="text-4xl font-bold text-white capitalize">Learn & Earn</h1>
    </div>
    <div class="py-4 text-xl text-white">Members Earn Digital Badges</div>

    <img
      src="/images/logo/firestarters-academy-logo-reversed-275px.png"
      loading="lazy"
      class="w-full"
      aria-label="academy logo"
      alt="Academy logo"
    />
    <div class="py-4 text-xl text-white">
      Take Advantage of the Knowledge Our Industry Leaders Have to Share!
    </div>
    <div class="block py-4 mx-auto">
      <UiButton text="Register Now!" path="/register" />
    </div>
  </div>
</template>

<script setup>
import bgImageFile from "/images/bg/bg-texture-05.png";

const bgImage = {
  "background-position": "center center",
  "background-size": "cover",
  "background-image": `url(${bgImageFile})`,
};
</script>
