<template>
  <HeroPage
    :pageImage="pageImage"
    :pageTitle="pageTitle"
    :pageSubTitle="pageSubTitle"
    :pageMessage="pageMessage"
  />
  <main class="container mx-auto py-8">
    <div class="grid grid-cols-1">
      <div class="py-4">
        <UiTitleIcon text="What is the Firestarters Community?" />
        <div class="pb-4">
          It is a global gathering of people that have Customer Experience in
          their DNA and want to exchange together in a safe and open
          environment. Think about a group of friends & colleagues that share a
          hobby and meet regularly to discuss the latest developments, points of
          views and seek advice from each other on a number of business topics.
        </div>
      </div>

      <div v-if="pending">
        <UiLoader />
      </div>
      <div v-else>
        <div v-for="video in videos" :key="video.id">
          <VideoPlayer
            :videoSrc="video.vst_url + video.v_source_id"
            :videoTitle="video.c_title"
          />
        </div>
      </div>

      <div class="py-4">
        <UiTitleIcon text="Who is part of this community?" />
        <div class="py-2">
          Business stakeholders across different industries and regions all
          around the world.
        </div>
      </div>

      <div class="py-4">
        <UiTitleIcon text="Where does it take place?" />
        <div class="px-8 py-2">
          <ul class="list-disc list-outside">
            <li>
              Members are welcome at anytime to jump on the site and review
              content and (coming soon) submit your own articles, best
              practices, and engage with other members
            </li>
            <li>Virtual events: 1 meeting/month, 1 hour in length</li>
            <li>
              Virtual events are focused on existing insights found on this
              site.
            </li>
            <li>Discussion based and topics are crowd sourced</li>
          </ul>
        </div>
      </div>

      <div class="py-4">
        <UiTitleIcon text="Who is part of this community?" />
        <div class="py-2">
          Business stakeholders across different industries and regions all
          around the world.
        </div>
      </div>

      <div class="py-4">
        <UiTitleIcon text="Your Benefits" />
        <div class="px-8 py-2">
          <ul class="list-disc list-outside">
            <li>
              <span class="font-bold">Exchange and learn</span> from business
              stakeholders across the world and across many industries.
            </li>
            <li>
              <span class="font-bold">Open environment</span> - we appreciate a
              diversity of thoughts where there is no right or wrong answer. We
              value your thoughts and point of views!
            </li>
            <li>
              <span class="font-bold">Safe environment</span> as there is no one
              focused on selling any products / services to you. This community
              is not used for any commercial purpose.
            </li>
            <li>
              <span class="font-bold">Expanding your network</span> with
              business professionals.
            </li>
            <li>
              <span class="font-bold">Problem solve and discuss</span>
              topics affecting your businesses—not platform related.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
      <div class="lg:col-span-2">
        <UiTitleIcon text="Discover our online self-assist tools" />
      </div>
      <div class="py-2">
        <FlashCard />
      </div>
      <div class="py-2">
        <BenefitsCard />
      </div>
    </div>
  </main>
</template>

<script>
import moment from "moment";

//Import image(s).
import pageImage from "/images/banner/page-banner-about-us.jpg";

export default {
  setup() {
    useHead({
      title: "About Us - Firestarters",
      meta: [
        {
          name: "description",
          content:
            "Create an exclusive member owned platform where business practitioners and leaders can expand their knowledge and edify each other through sharing insights, experiences, learnings, and perspectives.",
        },
      ],
    });

    //Get runtime config.
    const config = useRuntimeConfig();

    function dateFormat(value) {
      return moment(value).format(config.public.DATEFORMAT);
    }

    //Fetch data.
    const { pending, data: videos } = useLazyFetch(
      config.public.API_URL + "/" + config.public.API_CONTENT_VIDEO_REL_ROUTE,
      {
        query: {
          v_id: 2,
          e_date_gte: dateFormat(Date.now()),
          status_id: 1,
        },
      }
    );
    return {
      config,
      videos,
      pending,
    };
  },

  data() {
    return {
      pageImage: pageImage,
      pageTitle:
        "A truly global thought leadership <span class='text-fs-yellow'>community.</span>",
      pageSubTitle: "Our Vision",
      pageMessage:
        "Create an exclusive member owned platform where business practitioners and leaders can expand their knowledge and edify each other through sharing insights, experiences, learnings, and perspectives.",
    };
  },
};
</script>
