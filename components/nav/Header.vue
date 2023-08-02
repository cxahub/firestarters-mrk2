<template>
  <header class="absolute top-0 left-0 right-0 z-50 block bg-fs-brown">
    <nav
      class="container mx-auto xl:flex xl:justify-between xl:items-center py-5"
    >
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="hover:text-fs-yellow"
          ><img
            role="img"
            class="block float-left w-8 mt-2 mr-3"
            src="~@/assets/svg/firestarters-icon.svg"
            aria-label="firestarters icon"
            alt="Firestarters Icon"
          />
          <span
            class="block float-left text-2xl text-white uppercase font-bold"
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
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 xl:flex xl:space-y-0 xl:flex-row xl:items-center xl:space-x-10 xl:mt-0"
      >
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/about">About Us</NuxtLink>
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/events">Events</NuxtLink>
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/insights">Insights</NuxtLink>
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/academy">Academy</NuxtLink>
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/tools">Tools</NuxtLink>
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/register">Sign Up</NuxtLink>
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/login">Login</NuxtLink>
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
