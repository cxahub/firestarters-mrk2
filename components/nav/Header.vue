<template>
  <header class="absolute top-0 left-0 right-0 z-50 block bg-fs-brown">
    <nav
      class="container mx-auto xl:flex xl:justify-between xl:items-center py-5"
    >
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="hover:text-fs-yellow"
          ><NuxtImg
            role="img"
            class="block float-left w-8 mt-1 mr-3"
            src="/images/svg/firestarters-icon.svg"
            aria-label="firestarters icon"
            alt="Firestarters Icon"
          />
          <span
            class="block float-left font-roboto text-2xl text-white uppercase font-bold"
          >
            Firestarters
            <span
              class="block text-sm font-roboto-condensed text-fs-light-brown capitalize"
              >Your Global Business Community</span
            >
          </span>
        </NuxtLink>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex xl:hidden">
          <button
            type="button"
            class="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex min-h-screen' : 'hidden'"
        class="flex-col mt-8 space-y-4 xl:flex xl:space-y-0 xl:flex-row xl:items-center xl:space-x-10 xl:mt-0"
      >
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/about" activeClass="text-fs-yellow">About Us</NuxtLink>
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/events" activeClass="text-fs-yellow">Events</NuxtLink>
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/insights" activeClass="text-fs-yellow"
            >Insights</NuxtLink
          >
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/academy" activeClass="text-fs-yellow"
            >Academy</NuxtLink
          >
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/tools" activeClass="text-fs-yellow">Tools</NuxtLink>
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/contact" activeClass="text-fs-yellow"
            >Contact</NuxtLink
          >
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/register" activeClass="text-fs-yellow"
            >Sign Up</NuxtLink
          >
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/login" activeClass="text-fs-yellow">Login</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
