<template>
  <div v-if="pending && pending2">
    <UiLoader />
  </div>
  <div v-else>
    <div class="grid grid-cols-1">
      <div v-for="event in events" :key="event.id">
        <MetaHead
          :title="event.e_title"
          :description="event.e_description"
          :ogImageTypePath="event.imgt_path"
          :ogImage="event.img_file"
        />

        <HeroDetailPage
          :pageID="parseInt(event.e_id)"
          :pageTypeID="parseInt(event.et_id)"
          pageType="event"
          :pageImagePath="event.imgt_path"
          :pageImageFile="event.img_file"
          :pageTitle="event.e_title"
          :pageIndustry="``"
          :pageCaption="`${event.e_description}`"
          :pageDate="event.e_date"
          :pageTags="event.e_tag"
          :pageAuthorID="event.host_user_id"
          :pageAuthorFName="`${event.host_first_name}`"
          :pageAuthorLName="`${event.host_last_name}`"
          :pageAuthorImagePath="event.host_imgt_path"
          :pageAuthorImageFile="event.host_img_file"
        />
        <main id="article" class="container mx-auto py-8">
          <!--Event Title-->
          <div class="py-4">
            <UiTitleIcon text="Event Information" />
          </div>

          <div class="py-2 font-bold text-lg">
            {{ event.edt_name }} - {{ dateFormat(event.e_date) }}
          </div>

          <div v-if="event.e_note != null" class="py-2 text-sm">
            {{ event.e_note }}
          </div>

          <div v-if="event.e_url != '' && event.et_id == 4" class="py-4">
            <UiButton text="Register for Course" :path="event.e_url" />
          </div>

          <div class="py-4" v-html="event.e_description"></div>

          <div class="py-4">
            <EventDocument :eventID="parseInt(event.id)" />
          </div>

          <div v-if="event.edt_id == 2">
            <!--Event city-->
            <UiTitleIcon :text="event.e_city" type="h2" />

            <!--Event time & date-->
            <div class="py-2">
              <span class="text-lg font-bold">{{
                dateFormat(event.e_date)
              }}</span>
              <br />
              {{ event.time_name_start }} - {{ event.time_name_end }} LT
            </div>

            <div class="py-2">
              {{ event.e_address }}, {{ event.e_city }} {{ event.sp_name }}
              {{ event.e_zipcode }}
            </div>

            <div class="py-4">
              <UiTitleIcon text="Event Schedule" type="h3" />
            </div>

            <div
              v-for="schedule in schedules"
              :key="schedule.id"
              class="flex py-1"
            >
              <div class="flex-none w-40 font-bold">
                {{ schedule.time_name_start }} - {{ schedule.time_name_end }}
              </div>
              <div>{{ schedule.e_detail }}</div>
            </div>
          </div>

          <div class="py-4">
            If you're interested in joining our network of professionals in
            person, please register below. We look forward to seeing you around
            the fire!
          </div>

          <div
            v-if="
              dateNowFormat(event.e_date) > dateNowFormat(Date.now()) &&
              event.et_id != 4
            "
            class="py-4"
          >
            <UiButton
              text="Register for Event"
              :path="`https://sapdiscovery.fra1.qualtrics.com/jfe/form/SV_8uMdRp73QugG1rU?eventTitle=${event.e_title}`"
            />
          </div>
          <div v-else class="py-4">
            <UiButton text="Become a Member" path="/register" />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  setup() {
    //Get runtime config.
    const config = useRuntimeConfig();
    const route = useRoute();
    const host = useRequestURL().origin + useRequestURL().pathname;

    //Fetch data.
    const { pending, data: events } = useLazyFetch(
      config.public.API_URL + "/" + config.public.API_EVENT_ROUTE,
      {
        query: {
          id: route.params.id,
          status_id: 1,
        },
      }
    );

    //Fetch data.
    const { pending: pending2, data: schedules } = useLazyFetch(
      config.public.API_URL +
        "/" +
        config.public.API_EVENT_ROUTE +
        "-schedule-rel/?e_id" +
        route.params.id
    );

    return {
      config,
      events,
      schedules,
      host,
      pending,
      pending2,
    };
  },

  data() {
    return {
      showTitle: 0,
    };
  },

  methods: {
    dateFormat(value) {
      return moment(value).format("dddd, DD MMMM");
    },
    dateNowFormat(value) {
      return moment(value).format(this.dateFormatter);
    },
  },

  computed: {
    dateFormatter() {
      return this.$config.public.DATEFORMAT;
    },
  },
};
</script>
