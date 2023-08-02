<template>
  <div class="grid grid-cols-1">
    <div class="py-2" v-if="events.length !== 0">
      <UiDiamond text="Our Latest Events" />
    </div>
    <div>
      <div v-for="(event, index) in events" :key="event.id">
        <div v-if="index == 0">
          <NuxtLink :to="`/events/${event.id}/${event.e_canonical_title}`">
            <img
              role="img"
              loading="lazy"
              :src="getImage(event.imgt_path, event.img_file)"
              class="block rounded-lg w-full"
              aria-label="event image"
            />
          </NuxtLink>

          <!--Event title-->
          <h1 class="font-black uppercase text-5xl py-4">
            {{ event.e_title }}
          </h1>

          <!--Event tags-->
          <div v-html="splitJoin(event.e_tag)"></div>

          <!--Event description-->
          <div class="block float-left py-10">
            {{ event.e_description }}
          </div>

          <!--Event host and date info-->
          <div class="block w-full float-left font-bold">
            <span v-if="event.e_city !== '' && event.e_city !== null"
              >{{ event.e_city }} - </span
            >{{ event.edt_name }} - {{ dateFormat(event.e_date) }}
          </div>

          <!--Event notes-->
          <div class="block w-full text-sm float-left">
            {{ event.e_note }}
          </div>

          <div class="block float-left w-full">
            <NuxtLink
              :to="'/events/' + event.id + '/' + event.e_canonical_title"
              class="block float-left bg-fs-yellow hover:bg-fs-yellow-light font-bold uppercase py-4 px-4 my-5 rounded-lg"
              role="button"
              target="_blank"
              >Event Details</NuxtLink
            >
          </div>

          <!--Event document
          <div class="block w-full text-sm float-left">
            <EventDocument :eventid="parseInt(event.id)"></EventDocument>
          </div>-->
        </div>
      </div>
    </div>
  </div>

  <!--Event information-->
  <div class="grid grid-cols-1 border-b-2">
    <div class="py-2">
      <UiDiamond text="Event Information" />
    </div>
    <div>
      <p>
        Members of the community will have an opportunity to connect with each
        other on various CX topics and build a network of like-minded colleagues
        to collectively define what a great customer experience can be.
      </p>
      <NuxtLink
        to="/events"
        class="block float-left bg-white border border-fs-brown hover:bg-fs-brown hover:text-white font-bold uppercase py-4 px-4 my-5 rounded-lg"
        role="button"
        >More Events</NuxtLink
      >
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  setup() {
    //Get runtime config.
    const config = useRuntimeConfig();

    //Fetch event data.
    const { data: events } = useFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_EVENT_ROUTE
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

    splitJoin(str) {
      let badge = "";
      const list = str.split(", ");

      list.forEach(function (tag) {
        badge =
          badge +
          '<span class="block float-left font-roboto-condensed lowercase text-sm rounded-full text-white bg-fs-blue px-3 py-1 mr-1 my-1">' +
          tag +
          "</span>";
      });

      return badge;
    },
  },

  computed: {
    dateFormatter() {
      return this.$config.public.VUE_APP_DATEFORMAT;
    },
  },
};
</script>
