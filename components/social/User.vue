<template>
  <div v-if="pending">
    <UiLoader />
  </div>
  <div v-else>
    <!--Social user-->
    <div class="relative block w-[min-content_lfr] float-left py-2">
      <img
        role="img"
        loading="lazy"
        :src="getImage(imgtPath, imgFile)"
        class="relative rounded-full w-20 z-[4]"
        aria-label="insight author image"
      />

      <span v-for="ufr in userFieldRel" :key="ufr.id">
        <a
          :href="ufr.ufr_value"
          target="_blank"
          :class="imgtPath != null ? 'linkedin' : 'linkedin-no-photo'"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 48 48"
            width="24"
            height="24"
          >
            <path
              d="M0 0v18.293l6.415 6.414L0 31.122V48h48V0z"
              fill="#0095ff"
            ></path>
            <path
              d="M20.501 34.702h4.724v-7.935c0-.425.03-.85.155-1.153.342-.848 1.119-1.727 2.424-1.727 1.709 0 2.393 1.303 2.393 3.213v7.602h4.723v-8.148c0-4.364-2.33-6.395-5.438-6.395-2.549 0-3.667 1.424-4.289 2.394h.032v-2.06H20.5c.062 1.333 0 14.21 0 14.21zm-2.614 0v-14.21h-4.723v14.21zm-2.362-16.15c1.648 0 2.673-1.091 2.673-2.455-.03-1.394-1.025-2.455-2.641-2.455s-2.672 1.06-2.672 2.455c0 1.364 1.025 2.455 2.61 2.455h.03z"
              fill="#fff"
            ></path>
          </svg>
        </a>
      </span>
    </div>
    <div
      class="block float-left mt-3 ml-5"
      :class="color ? 'text-white' : 'text-black'"
    >
      <div v-if="authorFirstName != ''">
        By:
        <span class="font-bold"
          >{{ authorFirstName }} {{ authorLastName }}</span
        >
      </div>
      <div v-if="datePosted != ''">
        Posted: <span class="font-bold">{{ $dateFormat(datePosted) }}</span>
      </div>
      <div v-if="readTime != ''">
        Read Time: <span class="font-bold">{{ readTime }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

const props = defineProps({
  userID: { type: Number, default: 0 },
  imgtPath: { type: String, default: "user" },
  imgFile: { type: String, default: "avatar-default.png" },
  imgSize: { type: String, default: "large" },
  authorFirstName: { type: String, default: "" },
  authorLastName: { type: String, default: "" },
  datePosted: { type: String, default: "" },
  readTime: { type: String, default: "" },
  color: { type: Boolean, default: false },
});

//Fetch data.
const { pending, data: userFieldRel } = useLazyFetch(
  config.public.API_URL +
    "/" +
    config.public.API_USER_FIELD_REL_ROUTE +
    "/?user_id=" +
    props.userID +
    "&uf_id=1"
);

function getImage(path, file) {
  let imageURL =
    config.public.CDN_URL +
    "/" +
    config.public.CDN_REPOSITORY_PATH +
    "/image/" +
    path +
    "/" +
    file;

  if (imageURL.includes("null")) {
    imageURL = "/images/cxa/avatar.png";
  }

  return imageURL;
}
</script>

<style scoped>
.social-user {
  display: block;
  float: left;
  position: relative;
  width: min-content;
  padding: 0rem;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
}

.author-img-large {
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1.75rem;
  z-index: 4;
}

.author-img-medium {
  position: relative;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 1.65rem;
  z-index: 4;
}

.author-img-small {
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  z-index: 4;
}

.linkedin {
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 5;
}

.linkedin-no-photo {
  margin-right: 1rem;
}
</style>
