<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto py-8">Register Page</main>
</template>

<script setup>
//Import image(s).
import pageImageFile from "/images/banner/page-banner-contact.jpg";

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
const pageImage = ref(pageImageFile);
const pageTitle = ref("Register Now");
const pageSubTitle = ref("Register to Join Our Team of Industry Leaders");
const pageMessage = ref("");
</script>
