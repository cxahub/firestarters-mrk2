<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto py-8">
    <div class="grid grid-cols-1">
      <div class="py-4">
        <UiTitleIcon
          text="Flash Enterprise Maturity Assessment"
          :icon="flashIcon"
        />
        <p class="pb-4">
          CX Advisory's FLASH model is a proprietary research tool that
          assesses, scores, and ranks brands against their peers and the
          industry average. FLASH analyzes attributes across the business to
          assess brands' maturity against changing trends, market conditions and
          consumer needs. Leading brands rely on FLASH benchmarks to clarify
          priorities, develop strategies and capabilities, and increase their
          organization's overall performance.
        </p>
        <p class="pb-4">
          <img
            role="img"
            src="/images/flash/flash-banner.jpg"
            class="h-auto max-w-full rounded-lg"
            aria-label="Flash Banner"
          />
        </p>
      </div>
      <div class="pb-4">
        <UiTitleIcon text="Scoring & Ranking" type="h2" />
        <p class="pb-4">
          An overall digital maturity score is calculated based on the weighted
          scoring of the individual attributes, to compare against peers & the
          industry average.
        </p>
        <p class="pb-4">
          <img
            role="img"
            src="/images/flash/flash-score.png"
            class="h-auto max-w-full rounded-lg"
            aria-label="Flash Banner"
          />
        </p>
      </div>
      <div class="py-4">
        <UiTitleIcon text="Analyze the Result" type="h2" />
        <p class="pb-4">
          A report is provided where you can dive deep into each attribute to
          identify strengths & opportunities.
        </p>
        <p class="pb-4">
          <img
            role="img"
            src="/images/flash/flash-strengths.png"
            class="h-auto max-w-full rounded-lg"
            aria-label="Flash Banner"
          />
        </p>
      </div>
    </div>
    <div class="py-4">
      <UiTitleIcon text="The Methodology" type="h2" />
      <p class="pb-4">
        FLASH Assessment and performance benchmarks are provided by SAP, a
        global leader in enterprise cloud technology supporting 87% of total
        global commerce.
      </p>
      <p class="pb-4">
        Company scores from FLASH are collected, protected and analyzed using
        SAP's Value Lifecycle Management (VLM) technology. VLM provides
        companies with tools, such as benchmarking surveys and business cases,
        to identify the financial and strategic value of their digital
        transformation initiatives.
      </p>
    </div>
    <div class="py-4">
      <UiTitleIcon text="Get Your Brand Report" type="h2" />
      <p class="pb-4">
        Take the <strong>FLASH Retail Assessment</strong> now and see how your
        retail business' maturity compares to the industry. Get best practice
        recommendations on how to improve your business, and request a knowledge
        expert to walk you through your results.
      </p>
      <p class="pb-4">
        <UiButton
          text="Start Your Flash Now!"
          :path="flashWebsiteURL"
          target="_blank"
          type="link"
        />
      </p>
    </div>
    <div class="grid grid-cols-1">
      <div class="py-4">
        <UiTitleIcon
          text="Benefits Calculators"
          :icon="benefitsCalculatorIcon"
          class="pt-8"
        />
        <p class="pb-4">
          In collaboration with our partners at SAP, we have developed a set of
          tools that will help you identify, and calculate the potential impact
          their CX products could have on your KPIs. The benefits calculators
          empower you to develop your own understanding of the benefits
          associated with the SAP CX product suite, through a simple model
          requiring very little inputs.
        </p>
        <p class="pb-4">
          These tools use a 3 step process where you first select a specific
          industry, the value drivers that are most relevant to your business,
          then input a few baseline metrics. The benefits calculators will then
          provide a benefits summary outlining both the conservative, and
          likely, impact you could expect your business to achieve by
          implementing that specific CX product.
        </p>
        <p class="pb-4">
          Benchmarks and real customer proof points are provided, to enable you
          to validate and adjust the benefit assumptions and drivers directly in
          the tool to come up with a result that is more accurate to what you
          believe your business could achieve. A final downloadable report is
          also available that outlines all of the inputs, data, and results
          developed using the tools.
        </p>
        <p class="pb-4">
          The total process can be completed in roughly 15 minutes. Select the
          calculator below to learn more, and calculate how SAP CX can impact
          your business today.
        </p>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 sm:grid-cols-1">
      <div class="lg:col-span-3 py-4">
        <UiTitleIcon text="Choose Your Calculator" type="h2" />
      </div>
      <div class="py-6">
        <UiButton
          text="Commerce Calculator"
          path="https://valuemanagement.sap.com/bc-info-lite/0/1/sap_commerce_cloud"
          target="_blank"
          class="w-full text-center"
        />
      </div>
      <div class="py-6">
        <UiButton
          text="Sales Calculator"
          path="https://valuemanagement.sap.com/bc-info-lite/0/1/sap_sales_cloud"
          target="_blank"
          class="w-full text-center"
        />
      </div>
      <div class="py-6">
        <UiButton
          text="Service Cloud Calculator"
          path="https://valuemanagement.sap.com/bc-info-lite/0/1/sap_service_cloud"
          target="_blank"
          class="w-full text-center"
        />
      </div>
      <div class="py-6">
        <UiButton
          text="Marketing Calculator"
          path="https://valuemanagement.sap.com/bc-info-lite/0/1/sap_emarsys"
          target="_blank"
          class="w-full text-center"
        />
      </div>
      <div class="py-6">
        <UiButton
          text="Customer Data Calculator"
          path="https://valuemanagement.sap.com/bc-info-lite/0/1/sap_customer_data_management"
          target="_blank"
          class="w-full text-center"
        />
      </div>
    </div>
    <div class="grid grid-cols-1">
      <div class="py-4">
        <p class="pb-4">
          Join the Firestarters community to stay up to date on the continuous
          development and availability of tools that can help you unlock value,
          and drive your business forward.
        </p>
        <p class="pb-6">
          <UiButton
            text="Sign Up"
            path="/register"
            class="mr-4 block float-left"
          />
          <UiButton
            text="Learn More"
            path="/about"
            format="secondary"
            class="block"
          />
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

//Import image(s).
import pageImage from "/images/banner/page-banner-tools.jpg";
import flashIcon from "/images/svg/flash-bolt-icon.svg";
import benefitsCalculatorIcon from "/images/svg/benefit-calculator-icon.svg";

const props = defineProps({
  pageTitle: {
    type: String,
    default:
      "Discover our online self-assist <span class='text-fs-yellow'>tools</span>",
  },
  pageSubTitle: { type: String, default: "Impactful Tools" },
  pageMessage: {
    type: String,
    default:
      "Join the Firestarters community to stay up to date on the continuous development and availability of tools that can help you unlock value, and drive your business forward.",
  },
});

useHead({
  title: "Tools - Firestarters",
  meta: [
    {
      name: "description",
      content:
        "Join the Firestarters community to stay up to date on the continuous development and availability of tools that can help you unlock value, and drive your business forward.",
    },
  ],
});

const flashWebsiteURL = ref(config.public.FLASH_WEBSITE_URL);
</script>
