<template>
  <div></div>
</template>

<script>
//Get runtime config.
const config = useRuntimeConfig();

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  ogImageTypePath: {
    type: String,
    default: "",
  },
  ogImage: {
    type: String,
    default: "",
  },
});

const host = useRequestURL().origin + useRequestURL().pathname;
const imagePath =
  config.public.CDN_URL + "/" + config.public.CDN_REPOSITORY_PATH + "/image";

useHead({
  title: props.title,
  meta: [
    {
      name: "description",
      content: props.description,
    },
    {
      property: "og:site_name",
      content: "Firestarters - Your Global Business Community",
    },
    {
      property: "og:title",
      content: props.title,
    },
    {
      property: "og:description",
      content: props.description,
    },
    {
      property: "og:url",
      content: host,
    },
    {
      property: "og:image",
      content: `${imagePath}/${props.ogImageTypePath}/${props.ogImage}`,
    },
  ],
});
</script>
