<template>
  <footer class="w-full mt-auto block float-left bg-fs-brown">
    <div class="container mx-auto">
      <div class="py-10 grid grid-rows-1">
        <div class="grid lg:grid-cols-3 sm:grid-cols-1">
          <div class="lg:col-span-2 sm:col-span-1">
            <NuxtLink to="/" class="hover:text-fs-yellow"
              ><img
                role="img"
                class="block float-left w-8 mt-2 mr-3"
                src="~@/assets/svg/firestarters-icon.svg"
                aria-label="firestarters icon"
                alt="Firestarters Icon"
              />
              <span
                class="block float-left text-xl text-white uppercase font-bold"
              >
                Firestarters
                <span
                  class="block text-sm font-roboto-condensed text-fs-light-brown capitalize"
                  >Your Global Business Community</span
                >
              </span>
            </NuxtLink>
          </div>
          <div>
            <img
              class="block lg:float-right lg:pt-0 sm:pt-5"
              role="img"
              src="~@/assets/svg/footer-logo.svg"
              aria-label="cxa logo"
            />
          </div>
        </div>
      </div>
      <div class="pb-10 grid grid-rows-1">
        <div class="grid lg:grid-cols-3 sm:grid-cols-1">
          <div>
            <h6 class="font-roboto-condensed text-white text-lg uppercase py-4">
              Quick Links
            </h6>
            <NuxtLink
              to="/"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >About Us</NuxtLink
            >
            <NuxtLink
              to="/"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >Academy</NuxtLink
            >
            <NuxtLink
              to="/"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >Events</NuxtLink
            >
            <NuxtLink
              to="/"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >Insights</NuxtLink
            >
            <NuxtLink
              to="/"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >Tools</NuxtLink
            >
            <NuxtLink
              to="/"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >Customer Experience Advisory</NuxtLink
            >
          </div>
          <div>
            <h6 class="font-roboto-condensed text-white text-lg uppercase py-4">
              Support & Inquires
            </h6>
            <NuxtLink
              :to="`mailto:${companyEmail}?subject=Firestarters General Inquiry`"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >Email Us</NuxtLink
            >
            <NuxtLink
              to="/"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >Forgot Password</NuxtLink
            >
          </div>
          <div>
            <h6 class="font-roboto-condensed text-white text-lg uppercase py-4">
              Site Information
            </h6>
            <NuxtLink
              to="/"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >Privacy Policy</NuxtLink
            >
            <NuxtLink
              to="/"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >Terms of Use</NuxtLink
            >
            <NuxtLink
              to="/"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >Legal Disclosure</NuxtLink
            >
            <NuxtLink
              to="/"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >Copyright</NuxtLink
            >
            <NuxtLink
              to="/"
              class="block font-roboto-condensed text-md text-fs-yellow hover:text-white"
              >Trademark</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="grid grid-rows-1">
        <NuxtLink :to="`${linkedInURL}`" target="_blank">
          <img
            class="mx-auto"
            role="img"
            src="~@/assets/svg/linkedin-icon.svg"
            aria-label="linkedin icon"
          />
        </NuxtLink>
      </div>
      <div class="py-10 grid grid-rows-1">
        <h6 class="font-roboto font-black text-xl text-center text-white pb-4">
          Presented by SAP®
        </h6>
        <p class="font-roboto-condensed text-sm text-center text-white pb-4">
          Use of select third parties cookies or similar technologies for
          technical purposes and, with your consent, for other purposes as
          specified in the cookie policy. Consent the use of such technologies
          by using the “Accept” button. By closing this notice, you continue
          without accepting.
        </p>
        <p class="font-roboto-condensed text-sm text-center text-white">
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
      companyEmail: process.env.VUE_APP_COMPANY_EMAIL,
      linkedInURL: process.env.VUE_APP_FIRESTARTERS_LINKEDIN_URL,
    };
  },
};
</script>
