<template>
  <div class="grid grid-cols-1">
    <div v-if="insights.length == 0" class="py-4">
      <div>No results found, please modify your search.</div>
    </div>
    <div
      :class="
        insights.length > 1
          ? 'grid lg:grid-cols-2 sm:grid-cols-1 gap-12'
          : 'grid grid-cols-1'
      "
    >
      <div class="col-span-2">
        <div class="py-4 font-bold">
          Total Insights by Industry:
          <span class="text-fs-red">{{ insights.length - 1 }}</span>
        </div>
      </div>
      <div v-for="insight in insights" :key="insight.id">
        <div>
          <NuxtLink
            :to="`/insights/${insight.c_id}/${insight.c_canonical_title}`"
          >
            <NuxtImg
              :src="getImage(insight.imgt_path, insight.img_file)"
              loading="lazy"
              class="block rounded-lg"
              aria-label="insight image"
            />
          </NuxtLink>

          <!--Insight title-->
          <h1 class="font-black uppercase text-3xl py-4">
            <NuxtLink
              :to="`/insights/${insight.id}/${insight.c_canonical_title}`"
              >{{ insight.c_title }}</NuxtLink
            >
          </h1>

          <!--Insight tags-->
          <UiTags :tags="insight.c_tag" class="py-2" />

          <!--Insight industry-->
          <div class="py-4">
            {{ insight.i_name }}
          </div>

          <!--Insight caption-->
          <div class="py-4">
            {{ insight.c_caption }}
          </div>

          <div class="py-4">
            <div class="block float-left py-4 pr-2">
              <UiButton
                text="Insight Details"
                :path="
                  '/insights/' + insight.id + '/' + insight.c_canonical_title
                "
                size="small"
              />
            </div>
            <!--Insight document-->
            <div class="py-4">
              <InsightDocument
                :insightID="parseInt(insight.id)"
                size="small"
              ></InsightDocument>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  created: function () {
    this.moment = moment;
  },

  props: {
    kw: { type: String },
    industry: { type: Number },
  },

  async setup(props) {
    //Get runtime config.
    const config = useRuntimeConfig();

    function dateFormat(value) {
      return moment(value).format(config.public.VUE_APP_DATEFORMAT);
    }

    const kw = ref(props.kw);
    const industry = ref(props.industry);

    const { data: insights } = await useAsyncData(
      "insights",
      () =>
        $fetch(`/${config.public.VUE_APP_API_CONTENT_ROUTE}`, {
          method: "GET",
          baseURL: config.public.VUE_APP_API_URL,
          params: {
            c_date_gte: dateFormat(Date.now()),
            c_date_exp: dateFormat(Date.now()),
            status_id: 1,
            order_by: "c_date_posted DESC",
          },
        }),
      {
        watch: [kw, industry],
      }
    );

    return {
      config,
      insights,
    };
  },

  data() {
    return {};
  },

  methods: {
    getImage(path, file) {
      const imageURL =
        this.config.public.VUE_APP_CDN_URL +
        "/" +
        this.config.public.VUE_APP_CDN_REPOSITORY_PATH +
        "/image/" +
        path +
        "/" +
        file;

      return imageURL;
    },
  },
};
</script>
