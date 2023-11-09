<template>
  <div v-if="pending">
    <UiLoader />
  </div>
  <div v-else>
    <div
      v-if="events.length != 0"
      class="grid lg:grid-cols-2 sm:grid-cols-1 gap-12"
    >
      <div class="lg:col-span-2 pt-4">
        <UiTitleIcon :text="etID == 2 ? 'Past Events' : 'Past Courses'" />
      </div>
      <div v-for="event in events" :key="event.id">
        <NuxtLink :to="`/events/${event.id}/${event.e_canonical_title}`">
          <!--
          <NuxtImg
            :src="getImage(event.imgt_path, event.img_file)"
            loading="lazy"
            class="block rounded-lg w-full"
            aria-label="event image"
          />
          -->
          <img
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
        <div v-if="event.e_note != ''" class="text-sm">
          {{ event.e_note }}
        </div>

        <div v-if="event.et_id == 2" class="py-4">
          <div class="block float-left py-4">
            <UiButton
              text="Event Details"
              class="mr-4"
              :path="'/events/' + event.id + '/' + event.e_canonical_title"
              size="small"
            />
          </div>
          <!--Event document-->
          <div class="block py-4">
            <EventDocument :eventID="parseInt(event.id)" size="small" />
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
      return moment(value).format(config.public.DATEFORMAT);
    }

    //Fetch data.
    const { pending, data: events } = useLazyFetch(
      config.public.API_URL + "/" + config.public.API_EVENT_ROUTE,
      {
        query: {
          et_id: parseInt(props.etID),
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
      pending,
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
        this.config.public.CDN_URL +
        "/" +
        this.config.public.CDN_REPOSITORY_PATH +
        "/image/" +
        path +
        "/" +
        file;

      return imageURL;
    },
  },

  computed: {
    dateFormatter() {
      return this.$config.public.DATEFORMAT;
    },
  },
};
</script>
