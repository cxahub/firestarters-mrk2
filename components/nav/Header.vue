<template>
  <header class="absolute top-0 left-0 right-0 z-50 block bg-fs-brown">
    <nav
      class="container mx-auto xl:flex xl:justify-between xl:items-center py-5"
    >
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="hover:text-fs-yellow">
          <img
            src="/images/svg/firestarters-icon.svg"
            class="block float-left w-8 mt-1 mr-3"
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
          v-if="showAdminNav"
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink
            to="/profile"
            activeClass="text-fs-yellow"
            class="cursor-pointer"
            >Profile</NuxtLink
          >
        </li>
        <li
          v-if="showAdminNav"
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink
            to=""
            @click="logoutRequest"
            activeClass="text-fs-yellow"
            class="cursor-pointer"
            >Sign Out</NuxtLink
          >
        </li>
        <li
          v-if="!showAdminNav"
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink
            to=""
            @click="openRegister"
            activeClass="text-fs-yellow"
            class="cursor-pointer"
            >Sign Up</NuxtLink
          >
        </li>
        <li
          v-if="!showAdminNav"
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink
            to=""
            @click="openLogin"
            activeClass="text-fs-yellow"
            class="cursor-pointer"
            >Login</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
  <ModalLogin />
  <ModalRegister />
</template>

<script setup>
import nuxtStorage from "nuxt-storage";
import Login from "/components/auth/Login.vue";
import Register from "/components/auth/Register.vue";
import {
  ModalsContainer as ModalLogin,
  ModalsContainer as ModalRegister,
  useModal as useModalLogin,
  useModal as useModalRegister,
} from "vue-final-modal";

//Get runtime config.
const config = useRuntimeConfig();
const { $dateFormat } = useNuxtApp();

const showAdminNav = ref(
  nuxtStorage.localStorage.getData("isAuthenticated") || false
);
const showLoader = useState("showLoading");
const showMessage = useState("showMessaging");
const message = useState("isMessage");

//Call composable(s).
const { setLogIn, setLogOut } = useAuth();

function logoutRequest() {
  setLogOut();
  showAdminNav.value = false;
}

const { open: openLogin, close: closeLogin } = useModalLogin({
  component: Login,
  attrs: {
    modalId: "Login",
    title: "Login",
    onSubmit(formData) {
      showLoader.value = true;
      showMessage.value = false;
      message.value = "";
      loginRequest(formData)
        .then((result) => {
          if (result === "true") {
            setLogIn(formData.email, formData.remember);
            showAdminNav.value = true;
            showMessage.value = false;
            message.value = "";
            showLoader.value = false;
            closeLogin();
          } else {
            showLoader.value = false;
            showMessage.value = true;
            message.value = result;
          }
        })
        .catch((error) => {
          console.error("Login form could not be sent", error);
        });
      //closeLogin();
    },
    onConfirm() {
      closeLogin();
    },
  },
  slots: {
    default: "<p>Login here</p>",
  },
});

async function loginRequest(formData) {
  return await $fetch(
    config.public.API_URL + "/" + config.public.API_LOGIN_ROUTE,
    {
      method: "POST",
      body: {
        user_email: formData.email,
        user_password: formData.password,
        user_date_exp: $dateFormat(Date.now()),
        status_id: 1,
      },
    }
  );
}

const { open: openRegister, close: closeRegister } = useModalRegister({
  component: Register,
  attrs: {
    modalId: "RegisterForm",
    title: "Register",
    onConfirm() {
      closeRegister();
    },
  },
  slots: {
    default: "<p>Register</p>",
  },
});

const showMenu = ref(false);
</script>
