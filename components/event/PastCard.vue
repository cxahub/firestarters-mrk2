<template>
  <div v-if="events.length != 0" class="grid lg:grid-cols-2 sm:grid-cols-1">
    <div class="col-span-2 py-2">
      <UiTitleIcon :text="etID == 2 ? 'Past Events' : 'Past Courses'" />
    </div>
    <div v-for="(event, index) in events" :key="event.id">
      <div v-if="index == 0">
        <NuxtLink :to="`/events/${event.id}/${event.e_canonical_title}`">
          <NuxtImg
            :src="getImage(event.imgt_path, event.img_file)"
            loading="lazy"
            class="block rounded-lg w-full"
            aria-label="event image"
          />
        </NuxtLink>

        <!--Event title-->
        <h1 class="font-black uppercase text-3xl py-4">
          <NuxtLink :to="`/events/${event.id}/${event.e_canonical_title}`">{{
            event.e_title
          }}</NuxtLink>
        </h1>

        <!--Event tags-->
        <UiTags :tags="event.e_tag" class="py-2" />

        <!--Event description-->
        <div class="py-4">
          {{ event.e_description }}
        </div>

        <!--Event host and date info-->
        <div class="font-bold py-4">
          <span v-if="event.e_city !== '' && event.e_city !== null"
            >{{ event.e_city }} - </span
          >{{ event.edt_name }} - {{ dateFormat(event.e_date) }}
        </div>

        <!--Event notes-->
        <div class="text-sm py-4">
          {{ event.e_note }}
        </div>

        <div class="py-4">
          <div v-if="event.et_id == 2">
            <UiButton
              text="Event Details"
              :path="'/events/' + event.id + '/' + event.e_canonical_title"
            />
            <!--Event document-->
            <div class="py-4">
              <EventDocument :eventid="parseInt(event.id)"></EventDocument>
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
    etID: { type: Number },
  },

  setup(props) {
    //Get runtime config.
    const config = useRuntimeConfig();

    function dateFormat(value) {
      return moment(value).format(config.public.VUE_APP_DATEFORMAT);
    }

    //Fetch event data.
    const { data: events } = useFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_EVENT_ROUTE,
      {
        query: {
          et_id: props.etID,
          e_date_lt: dateFormat(Date.now()),
          e_data_exp: dateFormat(Date.now()),
          status_id: 1,
          order_by: "e_date DESC",
        },
      }
    );
    return {
      config,
      events,
    };
  },

  data() {
    return {};
  },

  methods: {
    dateFormat(value) {
      return moment(value).format(this.dateFormatter);
    },

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

  computed: {
    dateFormatter() {
      return this.$config.public.VUE_APP_DATEFORMAT;
    },
  },
};
</script>
