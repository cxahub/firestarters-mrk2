<template>
  <!--Video placeholder-->
  <div
    :class="
      videoDisplay === 'article'
        ? 'video-container-article'
        : 'video-container rt rb'
    "
  >
    <iframe
      frameborder="0"
      class="w-full aspect-video rounded-xl my-5"
      allowfullscreen="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      :title="videoTitle"
      :src="videoSrc"
    >
    </iframe>
  </div>
</template>

<script setup>
const props = defineProps({
  videoSrc: String,
  videoTitle: String,
  videoDisplay: String,
});
</script>
