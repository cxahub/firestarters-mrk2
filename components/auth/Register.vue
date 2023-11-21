<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="w-1/4 relative"
    content-transition="vfm-fade"
    overlay-transition="vfm-fade"
    :hideOverlay="false"
    :clickToClose="false"
  >
    <FormRegister
      @submit="(formData) => emit('submit', formData)"
      :title="title"
      :description="description"
    />
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from "vue-final-modal";
import FormRegister from "/components/form/Register.vue";

const emit = defineEmits(["submit"]);

const title = ref("Sign Up Now");
const description = ref("Register to join our team of industry leaders.");
</script>
