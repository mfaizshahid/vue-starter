<template>
  <v-app>
    <AppSidebar />
    <AppNavbar />

    <v-main>
      <v-container class="py-2 py-md-8 h-100">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use "@/styles/variables";

.main-content {
  background-color: #fafcff !important;
}
</style>
