<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto py-8">
    <div class="grid grid-cols-1">
      <div class="py-2">
        <UiTitleIcon text="What we do" />
      </div>
      <div class="py-4">
        <p class="pb-4">
          CXAs support with developing or validating your Customer Experience
          vision and long-term digitalization/transformation strategy.
        </p>

        <p class="pb-4">
          We offer free CX consultancy services, workshops and insights tailored
          to your needs, organization, customers, products and services,
          challenges and opportunities.
        </p>

        <p class="pb-4">
          Our services can provide tangible and actionable customer analysis and
          plans to support your business strategies and growth strategies.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div>
        <div class="py-4">
          <UiTitleIcon text="Industry Expertise" />
          <ul class="list-disc list-inside">
            <li>Consumer Products</li>
            <li>Retail</li>
            <li>Life Sciences</li>
            <li>Automotive</li>
            <li>Industrial Machinery & Components</li>
            <li>Travel & Transportation</li>
            <li>Telecomm</li>
            <li>Media & Entertainment</li>
            <li>Utilities</li>
            <li>Chemicals</li>
            <li>Financial Services</li>
          </ul>
        </div>
      </div>
      <div class="py-4">
        <UiTitleIcon text="Region Coverage" />
        <ul class="list-disc list-inside">
          <li>North America</li>
          <li>Latin America</li>
          <li>Europe/UK</li>
          <li>Middle East</li>
          <li>Africa</li>
          <li>Asia/Pacific</li>
        </ul>
      </div>
    </div>
    <CxAdvisoryCard />
    <div class="grid grid-cols-2">
      <div class="col-span-2 py-4">
        <UiTitleIcon text="Discover our online self-assist tools" />
      </div>
      <div class="px-12 py-2">
        <FlashCard />
      </div>
      <div class="px-12 py-2">
        <BenefitsCard />
      </div>
    </div>
  </main>
</template>

<script>
//Import image(s).
import pageImage from "/images/banner/page-banner-cxa.jpg";

export default {
  setup() {
    useHead({
      title: "CXA - Firestarters",
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
      pageTitle: "Your <span class='text-fs-yellow'>CX Advisors</span>",
      pageSubTitle: "Who are we exactly?",
      pageMessage:
        "A team of advisors with proven track records of running and building omnichannel businesses as executives in your industry.",
    };
  },
};
</script>
