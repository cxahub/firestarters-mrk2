<template>
  <div
    class="block float-left text-center bg-neutral-600 shadow-lg px-16 py-10 rounded-xl"
    :style="bgImage"
  >
    <div class="py-4">
      <h1 class="text-4xl font-bold text-white capitalize">
        Enjoy this Insight?
      </h1>
    </div>
    <div class="py-4 text-xl text-white">Tell Us What You Think?</div>
    <div class="block py-4 mx-auto">
      <UiButton
        text="Feedback Survey"
        :path="`${feedbackURL}?insightTitle=${title}`"
      />
    </div>
  </div>
</template>

<script setup>
import bgImageFile from "/images/bg/bg-texture-06.png";

//Get runtime config.
const config = useRuntimeConfig();

const feedbackURL = config.public.FIRESTARTERS_FEEDBACK_SURVEY_URL;

const bgImage = {
  "background-position": "center center",
  "background-size": "cover",
  "background-image": `url(${bgImageFile})`,
};
</script>
