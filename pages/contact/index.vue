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
        <UiTitleIcon text="Send Us a Message" />
      </div>
      <div>
        <FormContact />
      </div>
      <div class="pt-10">
        <UiTitleIcon text="Who Are the Firestarters?" />
      </div>
      <div class="py-4">
        It is a global gathering of people that have Customer Experience in
        their DNA and want to exchange together in a safe and open environment.
        Think about a group of friends & colleagues that share a hobby and meet
        regularly to discuss the latest developments, points of views and seek
        advice from each other on a number of business topics.
      </div>
      <div class="py-4">
        <UiButton text="Become a Member" path="/register" />
      </div>
    </div>
  </main>
</template>

<script setup>
//Import image(s).
import pageImageFile from "/images/banner/page-banner-contact.jpg";

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

const pageImage = ref(pageImageFile);
const pageTitle = ref("Contact Us");
const pageSubTitle = ref("We're Here For You!");
const pageMessage = ref(
  "Please allow for 2 -3 business days for us to respond."
);
</script>
