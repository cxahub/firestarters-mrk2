<template>
  <Hero
    :pageImage="pageImage"
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

<script>
export default {
  data() {
    return {
      pageImage: "",
      pageTitle:
        "By the <span class='text-fs-yellow'>People,</span> For the <span class='text-fs-yellow'>People</span>",
      pageSubTitle: "Who Are We?",
      pageMessage:
        "If you are responsible for business outcomes and driving growth for your organization - WE ARE YOU.",
      pageLink: "Home",
      pageLinkTitle: "Join Us",
      pageLinkType: "modal",
      pageLinkTarget: "#registerModal",
      pageSubTitle2: "Who Do We Do?",
      pageMessage2:
        "Each Firestarters member has ownership in our business community. We know the market is tough which is why our charter is to build and support each other through crowdsourced past learnings, thought leadership, expertise and strategy as you build your business.",
      pageLink2: "About Us",
      pageLinkTitle2: "About Us",
      pageLinkType2: "",
      pageLinkTarget2: "",
    };
  },
};
</script>
