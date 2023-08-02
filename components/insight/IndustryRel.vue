<template>
  <!--Insight industry relationship-->
  <div class="block w-full float-left py-2">
    <div class="block float-left pr-1">Industry(s):</div>
    <div
      class="font-bold"
      :class="color ? 'text-fs-yellow' : 'text-black'"
      v-for="(cir, index) in insightsIndustryRel"
      :key="cir.c_id"
    >
      {{ cir.i_name
      }}<span v-if="index < insightsIndustryRel.length - 1">, </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    insightid: { type: Number },
    color: { type: Boolean },
  },

  setup(props) {
    //Get runtime config.
    const config = useRuntimeConfig();

    //Fetch event data.
    const { data: insightsIndustryRel } = useFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_CONTENT_INDUSTRY_REL_ROUTE,
      {
        query: {
          c_id: props.insightid,
          status_id: 1,
        },
      }
    );
    return {
      config,
      insightsIndustryRel,
    };
  },
};
</script>
