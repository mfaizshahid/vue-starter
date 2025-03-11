<script setup lang="ts">
// Page meta-state
definePage({
  name: "admin-dashboard",
  meta: {
    requiresAuth: true,
    allowedStates: ["admin"],
    layout: "authenticated",
    title: "Dashboard",
    icon: "mdi-home",
    activeIcon: "mdi-home",
    name: "admin-dashboard",
  },
});
</script>

<template>
  <h1>Admin Dashboard</h1>
</template>

<style scoped lang="sass"></style>
