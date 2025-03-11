<script setup lang="ts">
import UserListing from '@/views/admin/users/list/UserListing.vue';

// Page meta-state
definePage({
  name: "user-index",
  meta: {
    requiresAuth: true,
    allowedStates: ["admin"],
    layout: "authenticated",
    title: "User",
    icon: "mdi-account-group",
    activeIcon: "mdi-account-group",
    name: "user-index",
  },
});
</script>

<template>
  <user-listing />
</template>

<style scoped lang="sass"></style>
