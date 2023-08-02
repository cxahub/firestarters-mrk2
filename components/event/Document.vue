<template>
  <div v-for="document in documents" :key="document.id">
    <NuxtLink
      :to="
        repositoryPath +
        '/document/' +
        document.doct_path +
        '/' +
        document.doc_file
      "
      class="block float-left bg-fs-yellow hover:bg-fs-yellow-light font-bold uppercase py-4 px-4 my-5 rounded-lg"
      role="button"
      target="_blank"
      >Get Session Content</NuxtLink
    >
  </div>
</template>

<script>
export default {
  props: {
    eventid: { type: Number },
  },

  setup(props) {
    //Get runtime config.
    const config = useRuntimeConfig();

    //Fetch event data.
    const { data: documents } = useFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_EVENT_ROUTE +
        "-document-rel",
      {
        query: {
          e_id: props.eventid,
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
