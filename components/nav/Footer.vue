<template>
  <footer class="w-full mt-auto block float-left bg-fs-brown">
    <div class="container mx-auto">
      <div class="py-10 grid grid-rows-1">
        <div class="grid grid-cols-3">
          <div class="col-span-2">
            <NuxtLink to="/" class="hover:text-fs-yellow">
              <!--
                <NuxtImg
                role="img"
                class="block float-left lg:w-8 sm:w-6 mt-1 mr-3"
                src="/images/svg/firestarters-icon.svg"
                aria-label="firestarters icon"
                alt="Firestarters Icon"
              />
              -->
              <img
                role="img"
                class="block float-left lg:w-8 sm:w-6 mt-1 mr-3"
                src="/images/svg/firestarters-icon.svg"
                aria-label="firestarters icon"
                alt="Firestarters Icon"
              />
              <span
                class="block float-left font-roboto lg:text-xl sm:text-lg text-white uppercase font-bold"
              >
                Firestarters
                <span
                  class="font-roboto-condensed block lg:text-sm sm:text-xs text-fs-light-brown capitalize"
                  >Your Global Business Community</span
                >
              </span>
            </NuxtLink>
          </div>
          <div>
            <!--
            <NuxtImg
              class="block lg:w-1/6 sm:w-1/3 float-right"
              role="img"
              src="/images/svg/footer-logo.svg"
              aria-label="cxa logo"
            />
            -->
            <img
              class="block lg:w-1/6 sm:w-1/3 float-right"
              role="img"
              src="/images/svg/footer-logo.svg"
              aria-label="cxa logo"
            />
          </div>
        </div>
      </div>
      <div class="pb-10 grid grid-rows-1">
        <div class="grid lg:grid-cols-3 sm:grid-cols-1">
          <div>
            <h6 class="text-white font-bold text-lg uppercase py-4">
              Quick Links
            </h6>
            <NuxtLink
              to="/about"
              class="block text-md text-fs-yellow hover:text-white"
              activeClass="underline decoration-solid"
              >About Us</NuxtLink
            >
            <NuxtLink
              to="/academy"
              class="block text-md text-fs-yellow hover:text-white"
              activeClass="underline decoration-solid"
              >Academy</NuxtLink
            >
            <NuxtLink
              to="/events"
              class="block text-md text-fs-yellow hover:text-white"
              activeClass="underline decoration-solid"
              >Events</NuxtLink
            >
            <NuxtLink
              to="/insights"
              class="block text-md text-fs-yellow hover:text-white"
              activeClass="underline decoration-solid"
              >Insights</NuxtLink
            >
            <NuxtLink
              to="/tools"
              class="block text-md text-fs-yellow hover:text-white"
              activeClass="underline decoration-solid"
              >Tools</NuxtLink
            >
            <NuxtLink
              to="/cxa"
              class="block text-md text-fs-yellow hover:text-white"
              activeClass="underline decoration-solid"
              >Customer Experience Advisory</NuxtLink
            >
          </div>
          <div>
            <h6 class="text-white font-bold text-lg uppercase py-4">
              Support & Inquires
            </h6>
            <NuxtLink
              :to="`mailto:${companyEmail}?subject=Firestarters General Inquiry`"
              class="block text-md text-fs-yellow hover:text-white"
              >Email Us</NuxtLink
            >
            <NuxtLink
              to="/forgot-password"
              class="block text-md text-fs-yellow hover:text-white"
              activeClass="underline decoration-solid"
              >Forgot Password</NuxtLink
            >
          </div>
          <div>
            <h6 class="text-white font-bold text-lg uppercase py-4">
              Site Information
            </h6>
            <NuxtLink
              to="https://www.sap.com/about/legal/privacy.html"
              target="_blank"
              class="block text-md text-fs-yellow hover:text-white"
              activeClass="underline decoration-solid"
              >Privacy Policy</NuxtLink
            >
            <NuxtLink
              to="https://www.sap.com/corporate/en/legal/terms-of-use.html"
              target="_blank"
              class="block text-md text-fs-yellow hover:text-white"
              activeClass="underline decoration-solid"
              >Terms of Use</NuxtLink
            >
            <NuxtLink
              to="https://www.sap.com/about/legal/impressum.html"
              target="_blank"
              class="block text-md text-fs-yellow hover:text-white"
              activeClass="underline decoration-solid"
              >Legal Disclosure</NuxtLink
            >
            <NuxtLink
              to="https://www.sap.com/about/legal/copyright.html"
              target="_blank"
              class="block text-md text-fs-yellow hover:text-white"
              activeClass="underline decoration-solid"
              >Copyright</NuxtLink
            >
            <NuxtLink
              to="https://www.sap.com/about/legal/trademark.html"
              target="_blank"
              class="block text-md text-fs-yellow hover:text-white"
              activeClass="underline decoration-solid"
              >Trademark</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="grid grid-rows-1">
        <NuxtLink :to="`${linkedInURL}`" target="_blank">
          <!--
          <NuxtImg
            class="mx-auto"
            role="img"
            src="/images/svg/linkedin-icon.svg"
            aria-label="linkedin icon"
          />
          -->
          <img
            class="mx-auto"
            role="img"
            src="/images/svg/linkedin-icon.svg"
            aria-label="linkedin icon"
          />
        </NuxtLink>
      </div>
      <div class="py-10 grid grid-rows-1">
        <h6 class="font-black text-xl text-center text-white pb-4">
          Presented by SAP®
        </h6>
        <p class="text-sm text-center text-white pb-4">
          Use of select third parties cookies or similar technologies for
          technical purposes and, with your consent, for other purposes as
          specified in the cookie policy. Consent the use of such technologies
          by using the “Accept” button. By closing this notice, you continue
          without accepting.
        </p>
        <p class="text-sm text-center text-white">
          Copyright © 2022 Firestarters. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      companyEmail: process.env.COMPANY_EMAIL,
      linkedInURL: process.env.FIRESTARTERS_LINKEDIN_URL,
    };
  },
};
</script>
