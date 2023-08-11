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

<script>
//Import image(s).
import pageImage from "/images/banner/page-banner-events.jpg";

export default {
  setup() {
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
  },
  data() {
    return {
      pageImage: pageImage,
      pageTitle:
        "Discover our Virtual & <span class='text-fs-yellow'>Live Events</span>",
      pageSubTitle: "Why Join Us Live?",
      pageMessage:
        "Members of the community will have an opportunity to connect with each other on various CX topics and build a network of like-minded colleagues to collectively define what a great customer experience can be.",
    };
  },
};
</script>
