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
        format="secondary"
        size="small"
      />
    </div>
  </div>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

const props = defineProps({
  eventID: { type: Number },
  size: { type: String },
});

//Fetch data.
const { pending, data: documents } = useLazyFetch(
  config.public.API_URL + "/" + config.public.API_EVENT_ROUTE + "-document-rel",
  {
    query: {
      e_id: parseInt(props.eventID),
      status_id: 1,
    },
  }
);

const repositoryPath =
  config.public.CDN_URL + "/" + config.public.CDN_REPOSITORY_PATH;
</script>
