<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto py-8">Register Page</main>
</template>

<script>
//Import image(s).
import pageImage from "/images/banner/page-banner-contact.jpg";

export default {
  setup() {
    useHead({
      title: "Regsiter - Firestarters",
      meta: [
        {
          name: "description",
          content:
            "A team of advisors with proven track records of running and building omnichannel businesses as executives in your industry.",
        },
      ],
    });
  },
  data() {
    return {
      pageImage: pageImage,
      pageTitle: "Register Now",
      pageSubTitle: "Register to Join Our Team of Industry Leaders",
      pageMessage: "",
    };
  },
};
</script>
