<template>
  <div v-if="showLogin" class="px-20 py-10 rounded-lg bg-white drop-shadow-2xl">
    <h1 class="text-4xl font-bold mb-4 uppercase">Change Password</h1>
    <div class="pb-4">Change your password through email validation.</div>
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

const showLogin = ref(true);
const vfm = useVfm();

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

const emit = defineEmits(["submit", formData, "openRegister"]);

const { register, errors, handleSubmit } = useForm({
  initialValues: {
    email: "",
    password: "",
    remember: false,
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
