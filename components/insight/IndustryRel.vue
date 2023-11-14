<template>
  <div v-if="pending">
    <UiLoader />
  </div>
  <div v-else>
    <!--Insight industry relationship-->
    <div class="block w-full float-left py-2">
      <div
        class="block float-left pr-1"
        :class="color ? 'text-white' : 'text-black'"
      >
        Industry(s):
      </div>
      <div
        class="block float-left max-w-max font-bold"
        :class="color ? 'text-fs-yellow' : 'text-black'"
        v-for="(cir, index) in insightsIndustryRel"
        :key="cir.c_id"
      >
        {{ cir.i_name
        }}<span v-if="index < insightsIndustryRel.length - 1">,&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

const props = defineProps({
  insightID: { type: Number },
  color: { type: Boolean },
});

//Fetch data.
const { pending, data: insightsIndustryRel } = useLazyFetch(
  config.public.API_URL + "/" + config.public.API_CONTENT_INDUSTRY_REL_ROUTE,
  {
    query: {
      c_id: parseInt(props.insightID),
      status_id: 1,
    },
  }
);
</script>
