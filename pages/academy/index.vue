<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto py-8">
    <div class="grid grid-cols-1 py-4">
      <div>
        <NuxtImg
          role="img"
          class="w-1/3"
          src="/images/logo/firestarters-academy-logo-275px.png"
          loading="lazy"
          aria-label="Firestarters Academy Logo"
        />
      </div>
      <div class="py-4">
        Learn from courses designed and delivered by customer experience and
        industry experts.
      </div>
    </div>
    <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
      <div>
        <div
          class="block text-center bg-gradient-to-br from-fs-yellow to-fs-orange shadow-lg rounded-lg py-4 my-4"
        >
          <div
            class="font-roboto font-black uppercase text-3xl text-white my-4"
          >
            Adopt
          </div>
          <div class="font-roboto font-black uppercase text-3xl my-2">
            Customer<br />Centricity
          </div>
        </div>
        <div class="p-6">
          Invest in your customer and develop as the change agent needed for
          your company.
        </div>
      </div>
      <div>
        <div
          class="block text-center bg-gradient-to-br from-fs-yellow to-fs-orange shadow-lg rounded-lg py-4 my-4"
        >
          <div
            class="font-roboto font-black uppercase text-3xl text-white my-4"
          >
            Learn
          </div>
          <div class="font-roboto font-black uppercase text-3xl my-2">
            Business<br />Skills
          </div>
        </div>
        <div class="p-6">
          Advance your career and grow your business by staying up to date on
          the latest trends and topics.
        </div>
      </div>
      <div>
        <div
          class="block text-center bg-gradient-to-br from-fs-yellow to-fs-orange shadow-lg rounded-lg py-4 my-4"
        >
          <div
            class="font-roboto font-black uppercase text-3xl text-white my-4"
          >
            Grow
          </div>
          <div class="font-roboto font-black uppercase text-3xl my-2">
            Industry<br />Knowledge
          </div>
        </div>
        <div class="p-6">
          Earn badges and certifications to show that you are recognized as a
          true Firestarter.
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1">
      <div class="py-10">
        <span class="font-bold">How it works:</span>
        <ol class="list-decimal list-inside">
          <li>Register for a Course</li>
          <li>Attend the Course</li>
          <li>Take the Quiz (Don't worry, we'll send you the link)</li>
          <li>Pass the Quiz, Earn Your Badge!</li>
          <li>Share Your Badge on LinkedIn and Build Your Personal Brand</li>
        </ol>
      </div>
    </div>
    <EventCard :etID="4" />
    <EventPastCard :etID="4" />
  </main>
</template>

<script>
//Import image(s).
import pageImage from "/images/banner/page-banner-academy.jpg";

export default {
  setup() {
    useHead({
      title: "Academy - Firestarters",
      meta: [
        {
          name: "description",
          content:
            "Members are able to expand your knowledge and energize your business.  Earn a badge and develop your path to certification.",
        },
      ],
    });
  },
  data() {
    return {
      pageImage: pageImage,
      pageTitle:
        "Discover Our Virtual & <span class='text-fs-yellow'>Live Courses.</span>",
      pageSubTitle: "Be More Effective",
      pageMessage:
        "Members are able to expand your knowledge and energize your business.  Earn a badge and develop your path to certification​.",
    };
  },
};
</script>
