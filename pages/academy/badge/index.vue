<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto py-8">
    <div class="grid grid-cols-1">
      <div class="py-10">
        <UiTitleIcon text="Title" />
      </div>
      <div>Text</div>
    </div>
  </main>
</template>

<script setup>
//Import image(s).
import pageImageFile from "/images/banner/page-banner-academy-badge.jpg";

useHead({
  title: "Academy Badge - Firestarters",
  meta: [
    {
      name: "description",
      content:
        "As a member you are able to earn a badge and develop your path to certification.",
    },
  ],
});

const pageImage = ref(pageImageFile);
const pageTitle = ref("XXX <span class='text-fs-yellow'>XXX</span>");
const pageSubTitle = ref("XXX");
const pageMessage = ref("XXX");
</script>
