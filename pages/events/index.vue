<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto py-8">
    <div class="grid grid-cols-1 py-4">
      <EventCard :etID="2" />
      <EventPastCard :etID="2" />
    </div>
  </main>
</template>

<script setup>
//Import image(s).
import pageImageFile from "/images/banner/page-banner-events.jpg";

useHead({
  title: "Events - Firestarters",
  meta: [
    {
      name: "description",
      content:
        "Members of the community will have an opportunity to connect with each other on various CX topics and build a network of like-minded colleagues to collectively define what a great customer experience can be.",
    },
  ],
});
const pageImage = ref(pageImageFile);
const pageTitle = ref(
  "Discover our Virtual & <span class='text-fs-yellow'>Live Events</span>"
);
const pageSubTitle = ref("Why Join Us Live?");
const pageMessage = ref(
  "Members of the community will have an opportunity to connect with each other on various CX topics and build a network of like-minded colleagues to collectively define what a great customer experience can be."
);
</script>
