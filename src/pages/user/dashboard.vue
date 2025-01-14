<script setup lang="ts">
// Page meta-state
definePage({
  name: "user-dashboard",
  meta: {
    requiresAuth: true,
    allowedStates: ['user'],
    layout: "authenticated",
    title: "Dashboard",
    icon: "mdi-edit-dashboard",
    activeIcon: "mdi-edit-dashboard",
    name: "user-dashboard"
  },
})
</script>

<template>
  <h1>Dashboard</h1>
</template>

<style scoped lang="sass">

</style>
