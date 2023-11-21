<template>
  <div v-if="showLogin" class="rounded-lg bg-white drop-shadow-2xl">
    <div class="grid grid-cols-6 bg-fs-yellow px-10 py-10 rounded-t-lg">
      <div class="col-span-5">
        <h1 class="text-6xl font-bold mb-4 uppercase">
          {{ title }}
        </h1>
      </div>
      <div class="text-right pt-2">
        <NuxtLink to="" @click="closeModal" class="underline cursor-pointer"
          >Close</NuxtLink
        >
      </div>
      <div class="col-span-6 text-2xl font-bold uppercase">
        {{ description }}
      </div>
    </div>

    <form @submit="handleSubmit">
      <div class="grid grid-cols-2 gap-4 px-10 py-10">
        <div>
          <label class="block font-bold pb-2 required">First Name</label>
          <input
            v-model="user_first_name"
            class="rounded mr-4 w-full"
            type="text"
            placeholder="First Name"
            v-bind="user_first_nameAttrs"
          />
          <div v-show="'user_first_name' in errors" class="text-fs-red text-sm">
            {{ errors.user_first_name }}
          </div>
        </div>
        <div>
          <label class="block font-bold pb-2 required">Last Name</label>
          <input
            v-model="user_last_name"
            class="rounded mr-4 w-full"
            type="text"
            placeholder="Last Name"
            v-bind="user_last_nameAttrs"
          />
          <div v-show="'user_last_name' in errors" class="text-fs-red text-sm">
            {{ errors.user_last_name }}
          </div>
        </div>
        <div class="col-span-2">
          <label class="block font-bold pb-2 required">Email</label>
          <input
            v-model="user_email"
            class="rounded mr-4 w-full"
            type="text"
            placeholder="Email"
            v-bind="user_emailAttrs"
          />
          <div v-show="'user_email' in errors" class="text-fs-red text-sm">
            {{ errors.user_email }}
          </div>
        </div>
        <div>
          <label class="block font-bold pb-2 required">Company</label>
          <input
            v-model="user_company"
            class="rounded mr-4 w-full"
            type="text"
            placeholder="Company"
            v-bind="user_companyAttrs"
          />
          <div v-show="'user_company' in errors" class="text-fs-red text-sm">
            {{ errors.user_company }}
          </div>
        </div>
        <div>
          <label class="block font-bold pb-2 required">Country</label>
          <select
            class="form-select rounded"
            v-model="cntry_id"
            v-bind="cntry_idAttrs"
          >
            <option value="0">Choose...</option>
            <option
              v-for="country in countries"
              :key="country.id"
              :value="country.id"
            >
              {{ country.cntry_name }} ({{ country.cntry_abbreviation }})
            </option>
          </select>
          <div v-show="'cntry_id' in errors" class="text-fs-red text-sm">
            {{ errors.cntry_id }}
          </div>
        </div>
        <div>
          <label class="block font-bold pb-2 required">Password</label>
          <input
            v-model="user_password"
            class="rounded mr-4 w-full"
            type="password"
            placeholder="Password"
            v-bind="user_passwordAttrs"
          />
          <div v-show="'user_password' in errors" class="text-fs-red text-sm">
            {{ errors.user_password }}
          </div>
        </div>
        <div>
          <label class="block font-bold pb-2 required">Confirm Password</label>
          <input
            v-model="user_password_confirm"
            class="rounded mr-4 w-full"
            type="password"
            placeholder="Confirm Password"
            v-bind="user_password_confirmAttrs"
          />
          <div
            v-show="'user_password_confirm' in errors"
            class="text-fs-red text-sm"
          >
            {{ errors.user_password_confirm }}
          </div>
        </div>
        <div class="col-span-2">
          <ul class="list-disc list-outside">
            <li>At least 8 characters, max 16</li>
            <li>5 or more unique characters</li>
            <li>Uppercase, lowercase, numeric & special characters.</li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-1 bg-fs-blue rounded-b-lg px-10">
        <div class="text-right">
          <UiButton role="button" text="Sign Up" type="submit" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useVfm } from "vue-final-modal";

//Get runtime config.
const config = useRuntimeConfig();

const props = defineProps({
  title: { type: String },
  description: { type: String },
});

const showLogin = ref(true);
const vfm = useVfm();

function closeModal() {
  vfm.closeAll();
}

//Fetch data.
const { pending, data: countries } = useLazyFetch(
  config.public.API_URL + "/" + config.public.API_COUNTRY_ROUTE,
  {
    query: {
      status_id: 1,
    },
  }
);

//See - https://vorms.mini-ghost.dev/guide/
import { useForm } from "@vorms/core";

const formData = "";

const emit = defineEmits(["submit", formData, "confirm"]);

const { register, errors, handleSubmit } = useForm({
  initialValues: {
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    user_company: "",
    cntry_id: 0,
    user_password: "",
    user_password_confirm: "",
  },
  onSubmit(formData) {
    alert(JSON.stringify(formData, null, 2));
  },
});
const { value: user_first_name, attrs: user_first_nameAttrs } = register(
  "user_first_name",
  {
    validate(value) {
      if (!value) return "First name is required.";
    },
  }
);
const { value: user_last_name, attrs: user_last_nameAttrs } = register(
  "user_last_name",
  {
    validate(value) {
      if (!value) return "Last name is required.";
    },
  }
);
const { value: user_email, attrs: user_emailAttrs } = register("user_email", {
  validate(value) {
    if (!value) return "Email is required.";
  },
});
const { value: user_company, attrs: user_companyAttrs } = register(
  "user_company",
  {
    validate(value) {
      if (!value) return "Company name is required.";
    },
  }
);
const { value: cntry_id, attrs: cntry_idAttrs } = register("cntry_id", {
  validate(value) {
    console.log(value);
    if (value == 0) return "Country is required.";
  },
});
const { value: user_password, attrs: user_passwordAttrs } = register(
  "user_password",
  {
    validate(value) {
      if (!value) return "Password is required.";
    },
  }
);
const { value: user_password_confirm, attrs: user_password_confirmAttrs } =
  register("user_password_confirm", {
    validate(value) {
      if (!value || value != user_password.value)
        return "Password must match and is required.";
    },
  });
</script>
