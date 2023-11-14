<template>
  <Hero
    :pageImagePath="pageImagePath"
    :pageImageFile="pageImageFile"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
    :pageLink="pageLink"
    :pageLinkTitle="pageLinkTitle"
    :pageLinkType="pageLinkType"
    :pageLinkTarget="pageLinkTarget"
    :pageSubTitle2="pageSubTitle2"
    :pageMessage2="pageMessage2"
    :pageLink2="pageLink2"
    :pageLinkTitle2="pageLinkTitle2"
    :pageLinkType2="pageLinkType2"
    :pageLinkTarget2="pageLinkTarget2"
  />
  <Event />
  <Insight />
  <MainTestimonial />
  <Cx />
</template>

<script setup>
const pageImagePath = "";
const pageImageFile = "";
const pageTitle =
  "By the <span class='text-fs-yellow'>People,</span> For the <span class='text-fs-yellow'>People</span>";
const pageSubTitle = "Who Are We?";
const pageMessage =
  "If you are responsible for business outcomes and driving growth for your organization - WE ARE YOU.";
const pageLink = "/";
const pageLinkTitle = "Join Us";
const pageLinkType = "modal";
const pageLinkTarget = "#registerModal";
const pageSubTitle2 = "What Do We Do?";
const pageMessage2 =
  "Each Firestarters member has ownership in our business community. We know the market is tough which is why our charter is to build and support each other through crowdsourced past learnings, thought leadership, expertise and strategy as you build your business.";
const pageLink2 = "/about";
const pageLinkTitle2 = "About Us";
const pageLinkType2 = "";
const pageLinkTarget2 = "";
</script>
