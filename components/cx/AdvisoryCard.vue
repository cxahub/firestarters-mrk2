<template>
  <div class="grid grid-cols-1">
    <div class="py-2">
      <UiTitleIcon text="The Team" />
    </div>
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 py-4">
      <div v-for="advisor in advisors" :key="advisor.id">
        <div class="text-center bg-fs-light-gray rounded-lg p-10">
          <NuxtLink :to="advisor.linkedin" target="_blank">
            <img
              :src="getImage(advisor.path, advisor.image)"
              loading="lazy"
              class="mx-auto rounded-full w-1/2"
              aria-label="advisor image"
            />
          </NuxtLink>

          <!--Advisor name-->
          <h1 class="font-black uppercase text-3xl py-4">
            {{ advisor.name }}
          </h1>

          <!--Advisor title-->
          <div class="py-4">
            {{ advisor.title }}
          </div>

          <NuxtLink :to="advisor.linkedin" target="_blank">
            <img
              src="/images/svg/linkedin-icon.svg"
              loading="lazy"
              class="mx-auto w-8"
              aria-label="linkedin icon"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

const advisors = [
  {
    id: "1",
    path: "cxa",
    image: "jmccoy.jpg",
    name: "John McCoy",
    title: "Global VP CX Advisory",
    linkedin: "https://www.linkedin.com/in/therealmccoy1/",
  },

  {
    id: "2",
    path: "cxa",
    image: "jadmire.jpg",
    name: "Jeffrey Admire",
    title: "IM&C CXA",
    linkedin: "https://www.linkedin.com/in/jeffadmire/",
  },

  {
    id: "3",
    path: "cxa",
    image: "jbbarthel.jpg",
    name: "JB Barthel",
    title: "Consumer Products CXA",
    linkedin: "https://www.linkedin.com/in/johncbarthel/",
  },

  {
    id: "4",
    path: "cxa",
    image: "nbohorad.jpg",
    name: "Nicole Bohorad",
    title: "Retail CXA",
    linkedin: "https://www.linkedin.com/in/nbohorad/",
  },

  {
    id: "6",
    path: "cxa",
    image: "jflores.jpg",
    name: "Javier Flores",
    title: "Consumer Products Industry",
    linkedin: "https://www.linkedin.com/in/javflores/",
  },

  {
    id: "7",
    path: "cxa",
    image: "ffroemberg.jpg",
    name: "Florian Froemberg",
    title: "Multi-Industry Insights Director",
    linkedin: "https://www.linkedin.com/in/florian-fr%c3%b6mberg-8207751a/",
  },

  {
    id: "8",
    path: "cxa",
    image: "cgoddard.jpg",
    name: "Craig Goddard",
    title: "Studios CXA Lead",
    linkedin: "https://www.linkedin.com/in/craigjgoddard/",
  },

  {
    id: "9",
    path: "cxa",
    image: "tguendling.jpg",
    name: "Tina Guendling",
    title: "Automotive CXA",
    linkedin: "https://www.linkedin.com/in/tina-guendling-mba-210b9027/",
  },

  {
    id: "10",
    path: "cxa",
    image: "pjonsson.jpg",
    name: "Pether Jonsson",
    title: "IM&C CXA",
    linkedin: "https://www.linkedin.com/in/petherjonsson/",
  },

  {
    id: "11",
    path: "cxa",
    image: "zkrauss.jpg",
    name: "Zev Krauss",
    title: "Retail CXA",
    linkedin: "https://www.linkedin.com/in/zev-krauss/",
  },

  {
    id: "12",
    path: "cxa",
    image: "lmcdonald.jpg",
    name: "Luke McDonald",
    title: "IM&C CXA",
    linkedin: "https://www.linkedin.com/in/linklukemcdonald/",
  },

  {
    id: "13",
    path: "cxa",
    image: "totten.jpg",
    name: "Thomas Otten",
    title: "Strategic Partners CXA",
    linkedin: "https://www.linkedin.com/in/thomas-otten-ku/",
  },

  {
    id: "14",
    path: "cxa",
    image: "rsaluja.jpg",
    name: "Ritu Saluja",
    title: "Consumer Products CXA",
    linkedin: "https://www.linkedin.com/in/ritusaluja/",
  },

  {
    id: "15",
    path: "cxa",
    image: "dscribner.jpg",
    name: "David Scribner",
    title: "Strategic APJ CXA",
    linkedin: "https://www.linkedin.com/in/davidrossscribner/",
  },

  {
    id: "16",
    path: "cxa",
    image: "asingh.jpg",
    name: "Amrish Singh",
    title: "Retail CXA",
    linkedin: "https://www.linkedin.com/in/amrish-singh/",
  },

  {
    id: "17",
    path: "cxa",
    image: "avastert.jpg",
    name: "Anouk Vastert",
    title: "Consumer Products CXA",
    linkedin: "https://www.linkedin.com/in/anouk-vastert-b80b042/",
  },
];

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
