<template>
  <div class="grid grid-cols-1">
    <div v-if="pending">
      <UiLoader />
    </div>
    <div v-else>
      <div class="py-4" v-if="events.length !== 0">
        <UiTitleIcon text="Our Latest Events" />
      </div>
      <div>
        <div v-for="(event, index) in events" :key="event.id">
          <div v-if="index == 0">
            <NuxtLink :to="`/events/${event.id}/${event.e_canonical_title}`">
              <img
                :src="getImage(event.imgt_path, event.img_file)"
                loading="lazy"
                class="block rounded-lg w-full"
                aria-label="event image"
              />
            </NuxtLink>

            <!--Event title-->
            <h1 class="font-black uppercase text-5xl py-4">
              <NuxtLink
                :to="`/events/${event.id}/${event.e_canonical_title}`"
                >{{ event.e_title }}</NuxtLink
              >
            </h1>

            <!--Event tags-->
            <UiTags :tags="event.e_tag" />

            <!--Event description-->
            <div class="block float-left py-10">
              {{ event.e_description }}
            </div>

            <!--Event host and date info-->
            <div class="block w-full float-left font-bold">
              <span v-if="event.e_city !== '' && event.e_city !== null"
                >{{ event.e_city }} - </span
              >{{ event.edt_name }} - {{ $dateFormat(event.e_date) }}
            </div>

            <!--Event notes-->
            <div class="block w-full text-sm float-left py-4">
              {{ event.e_note }}
            </div>

            <div class="block float-left w-full py-4">
              <UiButton
                text="Event Details"
                :path="'/events/' + event.id + '/' + event.e_canonical_title"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Event information-->
  <div class="grid grid-cols-1 border-b-2 py-8">
    <div class="py-2">
      <UiTitleIcon text="Event Information" />
    </div>
    <div class="py-4">
      Members of the community will have an opportunity to connect with each
      other on various CX topics and build a network of like-minded colleagues
      to collectively define what a great customer experience can be.
    </div>
    <div class="py-4">
      <UiButton text="More Event" path="/events" format="secondary" />
    </div>
  </div>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

//Fetch data.
const { pending, data: events } = useLazyFetch(
  config.public.API_URL + "/" + config.public.API_EVENT_ROUTE
);

function getImage(path, file) {
  const imageURL =
    this.config.public.CDN_URL +
    "/" +
    this.config.public.CDN_REPOSITORY_PATH +
    "/image/" +
    path +
    "/" +
    file;
  return imageURL;
}
</script>
