<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto">
    <div class="grid grid-cols-1">
      <div class="py-10">
        <UiTitleIcon text="Title" />
      </div>
      <div>Text</div>
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
      pageTitle: "XXX <span class='text-fs-yellow'>XXX</span>",
      pageSubTitle: "XXX",
      pageMessage: "XXX",
    };
  },
};
</script>
