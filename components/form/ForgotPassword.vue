<template>
  <div
    v-if="showForgotPassword"
    class="px-20 py-10 rounded-lg bg-white drop-shadow-2xl"
  >
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
      <div class="field">
        <UiButton role="button" text="Reset Password" type="submit" />
        No account?
        <NuxtLink to="" @click="openRegister" class="underline cursor-pointer"
          >Register Now</NuxtLink
        >
      </div>
    </form>
  </div>
  <ModalRegister />
</template>

<script setup>
import Register from "/components/auth/Register.vue";
import {
  useVfm,
  ModalsContainer as ModalRegister,
  useModal as useModalRegister,
} from "vue-final-modal";

const props = defineProps({
  title: { type: String },
  description: { type: String },
});

const showForgotPassword = ref(true);
const vfm = useVfm();

function closeModal() {
  vfm.closeAll();
}

const { open: openRegister, close: closeRegister } = useModalRegister({
  component: Register,
  attrs: {
    modalId: "Register",
    teleportTo: false,
    title: "Register",
    onBeforeOpen() {
      showForgotPassword.value = false;
    },
    onConfirm() {
      showForgotPassword.value = true;
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
    email: "",
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
</script>
