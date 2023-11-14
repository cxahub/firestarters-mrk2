<template>
  <div class="grid grid-cols-1">
    <div v-if="insights.length == 0" class="py-4 text-fs-red">
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
          <span class="text-fs-red">{{ insights.length }}</span>
        </div>
      </div>
      <div v-for="insight in insights" :key="insight.id">
        <div>
          <NuxtLink
            :to="`/insights/${insight.c_id}/${insight.c_canonical_title}`"
          >
            <img
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
          <InsightIndustryRel :insightID="parseInt(insight.c_id)" />

          <!--Insight caption-->
          <div class="py-4">
            {{ insight.c_caption }}
          </div>

          <!--Insight author and date info-->
          <SocialUser
            :userID="parseInt(insight.author_user_id)"
            :imgtPath="insight.author_imgt_path"
            :imgFile="insight.author_img_file"
            :authorFirstName="insight.author_first_name"
            :authorLastName="insight.author_last_name"
            :datePosted="insight.c_date_posted"
            :readTime="insight.c_read_time"
          />

          <div class="block float-left w-full pt-8 pb-4">
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

<script setup>
//Get runtime config.
const config = useRuntimeConfig();
const { $dateFormat } = useNuxtApp();

const props = defineProps({
  insightsPath: {
    type: String,
  },
  kw: {
    type: String,
  },
  industry: {
    type: Number,
  },
});

//Transition prop to reactive var.
const insightAPIPath = toRef(props, "insightsPath");
const kws = toRef(props, "kw");
const industrys = toRef(props, "industry");

const { data: insights } = await useAsyncData(
  "insights",
  () =>
    $fetch(insightAPIPath.value, {
      params: {
        kw: kws.value,
        i_id: industrys.value,
        c_date_gte: $dateFormat(Date.now()),
        c_date_exp: $dateFormat(Date.now()),
        status_id: 1,
        order_by: "c_date_posted DESC",
      },
    }),
  {
    watch: [kws, industrys],
  }
);

function getImage(path, file) {
  const imageURL =
    config.public.CDN_URL +
    "/" +
    config.public.CDN_REPOSITORY_PATH +
    "/image/" +
    path +
    "/" +
    file;

  return imageURL;
}
</script>
