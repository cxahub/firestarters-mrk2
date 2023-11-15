<template>
  <div class="py-4">
    <UiTitleIcon text="Firestarters Badges" />
    <div class="pb-4">
      Firestarters Academy issues badges to its members and attendees after
      passing a short quiz in acknowledgement of their participation! Typically,
      the quiz link is sent via email shortly after the training session. Once
      passing the quiz, a link will be provided to share the badge on your
      LinkedIn profile page. Don't forget to
      <NuxtLink
        to="/register"
        class="text-md text-fs-brown underline"
        activeClass="underline decoration-solid"
        >become a Firestarters member
      </NuxtLink>
      to receive more valuable business insights and access to valuable tools!
    </div>
  </div>
  <div class="py-4">
    <UiTitleIcon text="Firestarters - Become a Member" />
    <div class="pb-4">
      Join the Firestarters community to stay up to date on the continuous
      development and availability of tools that can help you unlock value, and
      drive your business forward.
    </div>
    <div class="py-4">
      <UiButton
        text="Register"
        path="/register"
        class="mr-4 block float-left"
      />
      <UiButton
        text="Learn More"
        path="/about"
        format="secondary"
        class="block"
      />
    </div>
  </div>
</template>
