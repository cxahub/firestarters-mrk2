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

<script>
//Import image(s).
import pageImage from "/images/banner/page-banner-academy-badge.jpg";

export default {
  setup() {
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
