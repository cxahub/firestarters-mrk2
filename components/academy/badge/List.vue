<template>
  <div v-for="badge in badges" :key="badge.id">
    <div v-if="token === badge.badgeToken" class="text-center pb-8">
      <h3 class="text-fs-orange text-3xl font-bold">{{ badge.title }}</h3>
      <div class="pb-4">
        {{ badge.description }}
      </div>
      <div class="pb-4 underline text-sm">
        Thank you for completing your training, click the badge below to share
        on LinkedIn!
      </div>
      <div class="pb-4">
        <a
          :href="`${badge.badgeShareURL}`"
          target="_blank"
          :alt="`${badge.name}`"
          :title="`${badge.name}`"
          class="link"
        >
          <img
            role="img"
            :src="badge.image"
            aria-label="badge image"
            class="mx-auto"
          />
          <br />
          <br />
          <span class="font-bold underline"> Share on LinkedIn </span><br />
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 48 48"
            width="32"
            height="32"
            class="mx-auto"
          >
            <path
              d="M0 0v18.293l6.415 6.414L0 31.122V48h48V0z"
              fill="#0095ff"
            ></path>
            <path
              d="M20.501 34.702h4.724v-7.935c0-.425.03-.85.155-1.153.342-.848 1.119-1.727 2.424-1.727 1.709 0 2.393 1.303 2.393 3.213v7.602h4.723v-8.148c0-4.364-2.33-6.395-5.438-6.395-2.549 0-3.667 1.424-4.289 2.394h.032v-2.06H20.5c.062 1.333 0 14.21 0 14.21zm-2.614 0v-14.21h-4.723v14.21zm-2.362-16.15c1.648 0 2.673-1.091 2.673-2.455-.03-1.394-1.025-2.455-2.641-2.455s-2.672 1.06-2.672 2.455c0 1.364 1.025 2.455 2.61 2.455h.03z"
              fill="#fff"
            ></path>
          </svg>
        </a>
      </div>
      <div class="pb-4 font-bold">{{ badge.badgeTags }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  token: { type: String, default: "" },
});

const badges = [
  {
    id: "1",
    image:
      "https://cdn.cxahub.com/academy/assets/badge/omr-digital-transformation-badge-2023.png",
    name: "Firestarters Academy - OMR - Masterclass",
    title: "OMR - Masterclass",
    description: "",
    badgeURL: "https://cdn.cxahub.com/academy/badge/omr.html",
    badgeShareURL:
      "https://www.linkedin.com/sharing/share-offsite/?url=https://cdn.cxahub.com/academy/badge/omr.html",
    badgeTags:
      "#FirestartersAcademy #digitalization #development #GrowWithFirestarters",
    badgeToken: "omr-2023",
  },
  {
    id: "2",
    image:
      "https://cdn.cxahub.com/academy/assets/badge/practical-ai-2023-badge-share-banner-480px.png",
    name: "Firestarters Academy - Fundamentals of Practical AI for Business",
    title: "Fundamentals of Practical AI for Business - Short Course",
    description: "",
    badgeURL: "https://cdn.cxahub.com/academy/badge/practical-ai.html",
    badgeShareURL:
      "https://www.linkedin.com/sharing/share-offsite/?url=https://cdn.cxahub.com/academy/badge/practical-ai.html",
    badgeTags:
      "#FirestartersAcademy #practicalai #generativeai #businessai #GrowWithFirestarters",
    badgeToken: "practical-ai-2023",
  },
  {
    id: "3",
    image:
      "https://cdn.cxahub.com/academy/assets/badge/fundamental-crm-2023-badge-share-banner-480px.png",
    name: "Firestarters Academy - Fundamentals of CRM",
    title: "Fundamentals of CRM - Short Course",
    description: "",
    badgeURL: "https://cdn.cxahub.com/academy/badge/fundamental-crm.html",
    badgeShareURL:
      "https://www.linkedin.com/sharing/share-offsite/?url=https://cdn.cxahub.com/academy/badge/fundamental-crm.html",
    badgeTags:
      "#cxa #Customercentricity #CRM #businessinsights #GrowWithFirestarters #CX #Transformation",
    badgeToken: "fundamental-crm-2023",
  },
  {
    id: "4",
    image:
      "https://cdn.cxahub.com/academy/assets/badge/customer-centric-design-2023-badge-share-banner-480px.png",
    name: "Firestarters Academy - Customer Centric Design",
    title:
      "Solve your Business Challenges through Customer Centric Design - Short Course",
    description: "",
    badgeURL:
      "https://cdn.cxahub.com/academy/badge/customer-centric-design.html",
    badgeShareURL:
      "https://www.linkedin.com/sharing/share-offsite/?url=https://cdn.cxahub.com/academy/badge/customer-centric-design.html",
    badgeTags:
      "#cxa #customercentric #experiencedesign #XD #GrowWithFirestarters #designthinking",
    badgeToken: "customer-centric-design-2023",
  },
  {
    id: "5",
    image:
      "https://cdn.cxahub.com/academy/assets/badge/b2b-self-service-portals-2023-badge-share-banner-480px.png",
    name: "Firestarters Academy - Mastering B2B Self-Service Portals: Empowering Businesses, Delighting Customers",
    title:
      "Mastering B2B Self-Service Portals: Empowering Businesses, Delighting Customers - Short Course",
    description: "",
    badgeURL:
      "https://cdn.cxahub.com/academy/badge/b2b-self-service-portals.html",
    badgeShareURL:
      "https://www.linkedin.com/sharing/share-offsite/?url=https://cdn.cxahub.com/academy/badge/b2b-self-service-portals.html",
    badgeTags:
      "#cxa #customercentric #experiencedesign #XD #GrowWithFirestarters #designthinking",
    badgeToken: "b2b-self-service-portals-2023",
  },
  {
    id: "6",
    image:
      "https://cdn.cxahub.com/academy/assets/badge/digital-marketing-relevant-campaigns-2023-badge-share-banner-480px.png",
    name: "Firestarters Academy - Fundamentals of Digital Marketing and Relevant Campaigns",
    title:
      "Fundamentals of Digital Marketing and Relevant Campaigns - Short Course",
    description: "",
    badgeURL:
      "https://cdn.cxahub.com/academy/badge/digital-marketing-relevant-campaigns.html",
    badgeShareURL:
      "https://www.linkedin.com/sharing/share-offsite/?url=https://cdn.cxahub.com/academy/badge/digital-marketing-relevant-campaigns.html",
    badgeTags:
      "#cxa, #DigitalMarketing #BrandCaseStudy #Marketing #GrowWithFirestarters #Transformation",
    badgeToken: "digital-marketing-relevant-campaigns-2023",
  },
];
</script>
