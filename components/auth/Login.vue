<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="w-1/4 relative"
    content-transition="vfm-fade"
    overlay-transition="vfm-fade"
    :hideOverlay="false"
    :clickToClose="false"
  >
    <FormLogin
      @submit="(formData) => emit('submit', formData)"
      :title="title"
      :description="description"
    />
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from "vue-final-modal";
import FormLogin from "/components/form/Login.vue";

const emit = defineEmits(["submit"]);

const title = ref("Login");
const description = ref("");
</script>
