<script setup lang="ts">
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
  <h1>User</h1>
</template>

<style scoped lang="sass"></style>
