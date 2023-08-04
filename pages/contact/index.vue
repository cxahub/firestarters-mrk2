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
import pageImage from "/images/banner/page-banner-contact.jpg";

export default {
  setup() {
    useHead({
      title: "Contact Us - Firestarters",
      meta: [
        {
          name: "description",
          content:
            "A global gathering of people that have Customer Experience in their DNA and want to exchange together in a safe and open environment. Think about a group of friends & colleagues that share a hobby and meet regularly to discuss the latest developments, points of views and seek advice from each other on a number of business topics.",
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
