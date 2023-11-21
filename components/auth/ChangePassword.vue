<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="w-1/4 relative"
    content-transition="vfm-fade"
    overlay-transition="vfm-fade"
    :hideOverlay="false"
    :clickToClose="false"
  >
    <FormChangePassword
      @submit="(formData) => emit('submit', formData)"
      :title="title"
      :description="description"
    />
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from "vue-final-modal";
import FormChangePassword from "/components/form/ChangePassword.vue";

const emit = defineEmits(["submit"]);

const title = ref("Change Password");
const description = ref("");
</script>
