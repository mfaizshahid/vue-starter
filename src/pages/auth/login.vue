<script setup lang="ts">
import { definePage } from 'vue-router/auto'
definePage({
    name: "login-user",
    meta: {
        requiresAuth: true,
        allowedStates: ['unauthenticated'],
        title: "Login",
        name: "login-user"
    },
})
</script>

<template>
  <h1>Login</h1>
</template>

<style scoped lang="sass">

</style>
