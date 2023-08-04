<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto">
    <div class="grid grid-cols-1">
      <div class="py-4">
        <UiTitleIcon
          text="Benefits Calculators"
          :icon="benefitsCalculatorIcon"
        />
        <UiTags tags="benefits, calculators, reports" class="lg:px-12 py-2" />
        <div class="lg:px-12">
          <p class="pb-4">
            In collaboration with our partners at SAP, we have developed a set
            of tools that will help you identify, and calculate the potential
            impact their CX products could have on your KPIs. The benefits
            calculators empower you to develop your own understanding of the
            benefits associated with the SAP CX product suite, through a simple
            model requiring very little inputs.
          </p>
          <p class="pb-4">
            These tools use a 3 step process where you first select a specific
            industry, the value drivers that are most relevant to your business,
            then input a few baseline metrics. The benefits calculators will
            then provide a benefits summary outlining both the conservative, and
            likely, impact you could expect your business to achieve by
            implementing that specific CX product.
          </p>
          <p class="pb-4">
            Benchmarks and real customer proof points are provided, to enable
            you to validate and adjust the benefit assumptions and drivers
            directly in the tool to come up with a result that is more accurate
            to what you believe your business could achieve. A final
            downloadable report is also available that outlines all of the
            inputs, data, and results developed using the tools.
          </p>
          <p class="pb-4">
            The total process can be completed in roughly 15 minutes. Select the
            calculator below to learn more, and calculate how SAP CX can impact
            your business today.
          </p>
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 sm:grid-cols-1">
      <div class="lg:col-span-3 py-4">
        <UiTitleIcon text="Choose Your Calculator" />
      </div>
      <div class="lg:px-12">
        <UiButton
          text="Commerce Calculator"
          path="https://valuemanagement.sap.com/bc-info-lite/0/1/sap_commerce_cloud"
          target="_blank"
          class="w-full text-center"
        />
      </div>
      <div class="lg:px-12">
        <UiButton
          text="Sales Calculator"
          path="https://valuemanagement.sap.com/bc-info-lite/0/1/sap_sales_cloud"
          target="_blank"
          class="w-full text-center"
        />
      </div>
      <div class="lg:px-12">
        <UiButton
          text="Service Cloud Calculator"
          path="https://valuemanagement.sap.com/bc-info-lite/0/1/sap_service_cloud"
          target="_blank"
          class="w-full text-center"
        />
      </div>
      <div class="lg:px-12">
        <UiButton
          text="Marketing Calculator"
          path="https://valuemanagement.sap.com/bc-info-lite/0/1/sap_emarsys"
          target="_blank"
          class="w-full text-center"
        />
      </div>
      <div class="lg:px-12">
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
        <UiTitleIcon text="Flash - Coming Soon" :icon="flashIcon" />
        <UiTags
          tags="methodology, scoring ranking, analyze"
          class="px-12 py-2"
        />
        <div class="px-12">
          <p class="pb-4">
            CX Advisory's "FLASH" model is a proprietary research tool that
            assesses, scores, and ranks brands against their peers, and the
            industry average. FLASH analyzes attributes against industry best
            practices across the whole customer cycle, and covers all channels
            and functionality.
          </p>
          <p class="pb-4">
            FLASH goes deep into industry specific best practices, from
            ecommerce/omnichannel commerce, to customer data, to
            personalization, to digital marketing. By using this tool you will
            get detailed insights into how your organization performs against
            those best practices, and outlines key opportunties to drive
            incrementality for your business.
          </p>
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 sm:grid-cols-1">
      <div class="py-4">
        <UiTitleIcon text="The Methodology" type="h2" />
        <div class="px-12">
          <p class="pb-4">
            Quickly assess your customer experience against industry best
            practices to identify strengths, and opportunities.
          </p>
          <NuxtImg
            role="img"
            src="/images/features/flash-feature-01.png"
            class="h-auto max-w-full"
            aria-label="feature image"
          />
        </div>
      </div>
      <div class="py-4">
        <UiTitleIcon text="Scoring & Ranking" type="h2" />
        <div class="px-12">
          <p class="pb-4">
            An overall digital maturity score is calculated based on the
            weighted scoring of the individual attributes, to compare against
            peers & the industry average.
          </p>
          <NuxtImg
            role="img"
            src="/images/features/flash-feature-02.png"
            class="h-auto max-w-full"
            aria-label="feature image"
          />
        </div>
      </div>
      <div class="py-4">
        <UiTitleIcon text="Analyze the Result" type="h2" />
        <div class="px-12">
          <p class="pb-4">
            A report is provided where you can dive deep into each attribute to
            identify strengths & opportunities.
          </p>
          <NuxtImg
            role="img"
            src="/images/features/flash-feature-03.png"
            class="h-auto max-w-full"
            aria-label="feature image"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1">
      <div class="py-4">
        <UiTitleIcon text="Analyze the Result" />
        <p class="px-12 pb-4">
          A report is provided where you can dive deep into each attribute to
          identify strengths & opportunities. If you want to be the first to
          know about FLASH and help us test the new version of this tool, click
          the button below to let us know.
        </p>
        <p class="px-12">
          <UiButton
            text="Flash BETA"
            path="https://sapdiscovery.fra1.qualtrics.com/jfe/form/SV_0lyHd5olrViCnjM"
            target="_blank"
          />
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1">
      <div class="py-4">
        <p class="px-12 pb-4">
          Join the Firestarters community to stay up to date on the continuous
          development and availability of tools that can help you unlock value,
          and drive your business forward.
        </p>
        <p class="px-12">
          <UiButton text="Sign Up" path="/register" class="mr-4" />
          <UiButton text="Learn More" path="/about" type="secondary" />
        </p>
      </div>
    </div>
  </main>
</template>

<script>
//Import image(s).
import pageImage from "/images/banner/page-banner-tools.jpg";
import flashIcon from "/images/svg/flash-bolt-icon.svg";
import benefitsCalculatorIcon from "/images/svg/benefit-calculator-icon.svg";

export default {
  setup() {
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
  },
  data() {
    return {
      pageImage: pageImage,
      pageTitle:
        "Discover our online self-assist <span class='text-fs-yellow'>tools</span>",
      pageSubTitle: "Impactful Tools",
      pageMessage:
        "Join the Firestarters community to stay up to date on the continuous development and availability of tools that can help you unlock value, and drive your business forward.",
      flashIcon: flashIcon,
      benefitsCalculatorIcon: benefitsCalculatorIcon,
    };
  },
};
</script>
