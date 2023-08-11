<template>
  <div></div>
</template>

<script>
export default {
  props: {
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
  },

  setup(props) {
    //Get runtime config.
    const config = useRuntimeConfig();
    const host = useRequestURL().origin + useRequestURL().pathname;
    const imagePath =
      config.public.VUE_APP_CDN_URL +
      "/" +
      config.public.VUE_APP_CDN_REPOSITORY_PATH +
      "/image";

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

    return {
      config,
    };
  },
};
</script>
