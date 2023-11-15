<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto py-8">
    <div class="grid grid-cols-1">
      <Academy />
      <EventCard :etID="4" />
      <EventPastCard :etID="4" />
    </div>
  </main>
</template>

<script setup>
//Import image(s).
import pageImageFile from "/images/banner/page-banner-academy.jpg";

useHead({
  title: "Academy - Firestarters",
  meta: [
    {
      name: "description",
      content:
        "Members are able to expand your knowledge and energize your business.  Earn a badge and develop your path to certification.",
    },
  ],
});

const pageImage = ref(pageImageFile);
const pageTitle = ref(
  "Discover Our Virtual & <span class='text-fs-yellow'>Live Courses.</span>"
);
const pageSubTitle = ref("Be More Effective");
const pageMessage = ref(
  "Members are able to expand your knowledge and energize your business.  Earn a badge and develop your path to certification​."
);
</script>
