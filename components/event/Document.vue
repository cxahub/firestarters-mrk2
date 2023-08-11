<template>
  <div v-if="pending">
    <UiLoader />
  </div>
  <div v-else>
    <div v-for="document in documents" :key="document.id">
      <UiButton
        text="Get Session Content"
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
  </div>
</template>

<script>
export default {
  props: {
    eventID: { type: Number },
  },

  setup(props) {
    //Get runtime config.
    const config = useRuntimeConfig();

    //Fetch data.
    const { pending, data: documents } = useLazyFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_EVENT_ROUTE +
        "-document-rel",
      {
        query: {
          e_id: parseInt(props.eventID),
          status_id: 1,
        },
      }
    );
    return {
      config,
      documents,
      pending,
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
