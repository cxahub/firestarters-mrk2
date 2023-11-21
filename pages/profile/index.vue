<template>
  <main class="container mx-auto py-8">
    <div class="grid grid-cols-1">
      <div class="py-4">
        <div class="pb-4">Profile</div>
      </div>
    </div>
  </main>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

//Call composable(s).
const { checkAuth } = useAuth();

onMounted(() => {
  checkAuth();
});

useHead({
  title: "Profile - Firestarters",
});
</script>
