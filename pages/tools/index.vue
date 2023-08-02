<template>
  <NavHeader />
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <div class="container mx-auto">
    <div class="grid grid-cols-1">
      <div class="py-10">
        <UiDiamond text="Title" />
      </div>
      <div>Text</div>
    </div>
  </div>
  <NavFooter />
</template>

<script>
//Import the banner image.
import pageImage from "~/assets/banner/page-banner-tools.jpg";

export default {
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
