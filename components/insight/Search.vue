<template>
  <div v-if="pending">
    <UiLoader />
  </div>
  <div v-else>
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
          @input="emitQueryKW($event.target.value)"
        />
      </div>
      <div>
        <select
          class="form-select rounded"
          v-model="industry"
          aria-describedby="industryHelp"
          @change="emitQueryIndustry(parseInt($event.target.value))"
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
  </div>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

const emit = defineEmits(["change", "input"]);

const industry = ref(0);
const kw = ref("");

function emitQueryKW(value) {
  kw.value = value;
  emit("input", value);
}

function emitQueryIndustry(value) {
  industry.value = value;
  emit("change", value);
}

//Fetch data.
const { pending, data: industries } = useLazyFetch(
  config.public.API_URL + "/" + config.public.API_INDUSTRY_ROUTE,
  {
    query: {
      status_id: 1,
    },
  }
);

const industrySelected = "All Industries";
</script>
