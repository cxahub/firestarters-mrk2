<template>
  <div>
    <div>
      <div v-if="result">{{ message }}</div>
      <div>
        <UiButton role="button" text="Send Message" type="submit" />
      </div>
    </div>
  </div>
</template>

<script setup>
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
</script>
