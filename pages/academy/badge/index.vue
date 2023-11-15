<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto py-8">
    <div class="grid grid-cols-1">
      <AcademyBadgeList :token="token" />
      <AcademyBadge />
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
//Import image(s).
import pageImageFile from "/images/banner/page-banner-academy-badge.jpg";

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

const pageImage = ref(pageImageFile);
const pageTitle = ref("Firestarters Academy Badges");
const pageSubTitle = ref("Share your badge with your LinkedIn account");
const pageMessage = ref(
  "If you have been awarded a badge it should be available below."
);
const token = ref(route.query.token);
</script>
