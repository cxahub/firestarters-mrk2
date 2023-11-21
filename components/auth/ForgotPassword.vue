<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="w-1/4 relative"
    content-transition="vfm-fade"
    overlay-transition="vfm-fade"
    :hideOverlay="false"
    :clickToClose="false"
  >
    <FormForgotPassword
      @submit="(formData) => emit('submit', formData)"
      :title="title"
      :description="description"
    />
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from "vue-final-modal";
import FormForgotPassword from "/components/form/ForgotPassword.vue";

const emit = defineEmits(["submit"]);

const title = ref("Forgot Password");
const description = ref("");
</script>
