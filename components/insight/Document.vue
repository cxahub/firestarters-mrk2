<template>
  <div v-for="document in documents" :key="document.id">
    <UiButton
      text="Get Article (PDF)"
      :path="
        repositoryPath +
        '/document/' +
        document.doct_path +
        '/' +
        document.doc_file
      "
      target="_blank"
      type="secondary"
    />
  </div>
</template>

<script>
export default {
  props: {
    insightid: { type: Number },
  },

  setup(props) {
    //Get runtime config.
    const config = useRuntimeConfig();

    //Fetch event data.
    const { data: documents } = useFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_CONTENT_ROUTE +
        "-document-rel",
      {
        query: {
          c_id: props.insightid,
          status_id: 1,
        },
      }
    );
    return {
      config,
      documents,
    };
  },

  data() {
    return {
      repositoryPath:
        this.$config.public.VUE_APP_CDN_URL +
        "/" +
        this.$config.public.VUE_APP_CDN_REPOSITORY_PATH,
    };
  },
};
</script>
