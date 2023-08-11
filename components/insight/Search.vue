<template>
  <div class="grid grid-cols-1 py-4">
    <div class="py-2">
      <UiTitleIcon text="Search Insights" />
    </div>
  </div>
  <div class="grid lg:grid-cols-2 sm:grid-cols-2 pb-8">
    <div>
      <input
        type="search"
        class="form-input rounded"
        v-model="kw"
        aria-describedby="kwHelp"
        placeholder="Search"
        @input="Update($event.target.value)"
      />
    </div>
    <div>
      <select
        class="form-select rounded"
        v-model="industry"
        aria-describedby="industryHelp"
        @change="$emit('update:industry', parseInt($event.target.value))"
      >
        <option value="0">{{ industrySelected }}</option>
        <option
          v-for="industry in industries"
          :key="industry.id"
          :value="industry.id"
        >
          {{ industry.i_name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { defineEmits, ref } from "vue";
export default {
  setup() {
    //Get runtime config.
    const config = useRuntimeConfig();

    const emit = defineEmits(["change", "input"]);

    const industry = ref(0);
    const kw = ref("");

    function Update(event) {
      emit("change", event);
    }

    //Fetch event data.
    const { data: industries } = useFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_INDUSTRY_ROUTE,
      {
        query: {
          status_id: 1,
        },
      }
    );

    return { industries, industry, kw };
  },

  data() {
    return {
      industrySelected: "All Industries",
      result: "",
    };
  },
};
</script>
