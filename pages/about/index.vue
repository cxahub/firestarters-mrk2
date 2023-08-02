<template>
  <NavHeader />
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto">
    <div class="grid grid-cols-1">
      <UiDiamond text="What is the Firestarters Community?" />
      <div class="pb-5">
        It is a global gathering of people that have Customer Experience in
        their DNA and want to exchange together in a safe and open environment.
        Think about a group of friends & colleagues that share a hobby and meet
        regularly to discuss the latest developments, points of views and seek
        advice from each other on a number of business topics.
      </div>
    </div>
  </main>
  <NavFooter />
</template>

<script>
//Import the banner image.
import pageImage from "~/assets/banner/page-banner-about-us.jpg";

export default {
  data() {
    return {
      pageImage: pageImage,
      pageTitle:
        "A truly global thought leadership <span class='text-fs-yellow'>community.</span>",
      pageSubTitle: "Our Vision",
      pageMessage:
        "Create an exclusive member owned platform where business practitioners and leaders can expand their knowledge and edify each other through sharing insights, experiences, learnings, and perspectives.",
    };
  },
};
</script>
