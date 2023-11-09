<template>
  <div>
    <div>
      <div v-if="result">{{ message }}</div>
      <div>
        <VForm
          class=""
          :validation-schema="schema"
          :initial-values="initialValues"
          v-slot="{ meta: formMeta }"
          @submit="handleSubmit"
        >
          <FormVTextInput
            type="text"
            name="name"
            label="Full Name"
            placeholder="Full Name"
          />

          <FormVTextInput
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
          />

          <FormVTextArea
            name="message"
            label="Message"
            placeholder="Enter a message"
          />

          <UiButton
            role="button"
            text="Send Message"
            type="submit"
            :disabled="!formMeta.valid"
          />
        </VForm>
      </div>
    </div>
  </div>
</template>

<script setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";

//Get runtime config.
const config = useRuntimeConfig();

let result = ref("");
const message = ref("Please allow for 2 -3 business days for us to respond.");

const handleSubmit = (values, actions) => {
  formRequest(values)
    .then((result) => {
      console.log(result);
      actions.resetForm();
    })
    .catch((error) => {
      console.error("Contact form could not be send", error);
    });
};

async function formRequest(values) {
  return await $fetch(
    config.public.API_URL + "/" + config.public.API_EMAIL_ROUTE,
    {
      headers: {
        "content-type": "multipart/form-data",
      },
      method: "POST",
      body: {
        toEmail: config.public.COMPANY_EMAIL,
        fromEmail: config.public.NOREPLY_EMAIL,
        subject: "Firestarter's Contact Form",
        name: values.name,
        email: values.email,
        message: values.message,
      },
    }
  );
}

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

const schema = object({
  name: string().required().label("Full Name"),
  email: string().required().email().label("Email Address"),
  message: string().required().label("Message"),
});

const initialValues = { name: "", email: "", message: "" };
</script>
