<template>
  <div v-if="showLogin" class="px-20 py-10 rounded-lg bg-white drop-shadow-2xl">
    <div class="grid grid-cols-6">
      <div class="col-span-5">
        <h1 class="text-4xl font-bold mb-4 uppercase">{{ title }}</h1>
      </div>
      <div class="text-right pt-2">
        <NuxtLink to="" @click="closeModal" class="underline cursor-pointer"
          >Close</NuxtLink
        >
      </div>
    </div>
    <div v-if="showMessage" class="text-fs-red py-4">
      {{ message }}
    </div>
    <div v-if="showLoader">
      <UiLoader icon="firestarters-icon.png" type="signin" />
    </div>
    <form @submit="handleSubmit">
      <div class="pb-4">
        <label class="block font-bold py-2 required">Email</label>
        <input
          v-model="email"
          class="rounded mr-4 mb-2 w-full"
          type="text"
          placeholder="Email"
          v-bind="emailAttrs"
        />
        <div v-show="'email' in errors" class="text-fs-red text-sm">
          {{ errors.email }}
        </div>
      </div>
      <div class="pb-4">
        <label class="block font-bold py-2 required">Password</label>
        <input
          v-model="password"
          class="rounded mr-4 mb-2 w-full"
          type="password"
          placeholder="Password"
          v-bind="passwordAttrs"
          ref="formRefs"
        />
        <div v-show="'password' in errors" class="text-fs-red text-sm">
          {{ errors.password }}
        </div>
      </div>
      <div class="pb-4">
        <input
          id="remember"
          v-model="remember"
          class="rounded mr-2 ring-0 focus:ring-0 ring-transparent ring-offset-0 shadow-none focus:ring-transparent bg-white text-fs-brown"
          type="checkbox"
          value="true"
          v-bind="rememberAttrs"
        />
        <label for="remember">Remember Me</label>
        <div class="float-right">
          <NuxtLink
            to=""
            @click="openForgotPassword"
            class="underline cursor-pointer"
            >Forgot Password?</NuxtLink
          >
        </div>
      </div>
      <div class="field">
        <UiButton role="button" text="Login" type="submit" />
        No account?
        <NuxtLink to="" @click="openRegister" class="underline cursor-pointer"
          >Register Now</NuxtLink
        >
      </div>
    </form>
  </div>
  <ModalForgotPassword />
  <ModalRegister />
</template>

<script setup>
import ForgotPassword from "/components/auth/ForgotPassword.vue";
import Register from "/components/auth/Register.vue";
import {
  useVfm,
  ModalsContainer as ModalForgotPassword,
  ModalsContainer as ModalRegister,
  useModal as useModalForgotPassword,
  useModal as useModalRegister,
} from "vue-final-modal";

const formRefs = ref();

const props = defineProps({
  title: { type: String },
  description: { type: String },
});

const showLoader = useState("showLoading");
const showMessage = useState("showMessaging");
const message = useState("isMessage");

const showLogin = ref(true);
const vfm = useVfm();

onMounted(() => {
  //Focus on password field if cookie present.
  if (useCookie("user_remember").value) {
    formRefs.value.focus();
  }
});

function closeModal() {
  vfm.closeAll();
}

const { open: openForgotPassword, close: closeForgotPassword } =
  useModalForgotPassword({
    component: ForgotPassword,
    attrs: {
      modalId: "ForgotPassword",
      title: "ForgotPassword",
      onBeforeOpen() {
        showLogin.value = false;
      },
      onSubmit(formData) {
        alert(JSON.stringify(formData, null, 2));
        closeForgotPassword();
      },
      onConfirm() {
        showLogin.value = true;
        closeForgotPassword();
      },
    },
    slots: {
      default: "<p>ForgotPassword</p>",
    },
  });

const { open: openRegister, close: closeRegister } = useModalRegister({
  component: Register,
  attrs: {
    modalId: "Register",
    teleportTo: false,
    title: "Register",
    onBeforeOpen() {
      showLogin.value = false;
    },
    onConfirm() {
      showLogin.value = true;
      closeRegister();
    },
  },
  slots: {
    default: "<p>Register</p>",
  },
});

//See - https://vorms.mini-ghost.dev/guide/
import { useForm } from "@vorms/core";

const formData = "";

const emit = defineEmits(["submit", formData, "openRegister", "confirm"]);

const { register, errors, handleSubmit } = useForm({
  initialValues: {
    email: useCookie("user_email").value || "",
    password: "",
    remember: useCookie("user_remember").value || false,
  },
  onSubmit(values) {
    emit("submit", values);
  },
});
const { value: email, attrs: emailAttrs } = register("email", {
  validate(value) {
    if (!value) return "Email is required!";
  },
});
const { value: password, attrs: passwordAttrs } = register("password", {
  validate(value) {
    if (!value) return "Password is required!";
  },
});
const { value: remember, attrs: rememberAttrs } = register("remember");
</script>
