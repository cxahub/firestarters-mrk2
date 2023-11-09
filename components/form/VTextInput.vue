<template>
  <div class="py-2">
    <div class="pb-2">
      <label class="font-bold">{{ label }}</label>
    </div>
    <div>
      <VField :name="name" v-slot="{ field, meta }">
        <input
          v-bind="field"
          class="rounded border-gray-300 w-full focus:outline-none focus:border-gray-300 focus:ring-none focus:ring-gray-300"
          :class="{
            'text-black': meta.valid && meta.touched,
            'text-fs-red': !meta.valid && meta.touched,
          }"
          :placeholder="placeholder"
          :type="type"
        />
        <VErrorMessage
          :name="name"
          as="div"
          class="text-base text-fs-red py-2"
        />
      </VField>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
});
</script>
