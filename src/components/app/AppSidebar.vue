<script lang="ts" setup>
import logo from "@/assets/logo.png";
import { useAppStore, useAuthStore } from "@/stores";
import { storeToRefs } from "pinia";
const appStore = useAppStore();
const authStore = useAuthStore()
  const { sidebarDrawer } = storeToRefs(appStore);
  import getSidebarData from "@/data/sidebar";
const sidebarData = getSidebarData(authStore.getUserType().value)
</script>

<template>
  <v-navigation-drawer
    v-model="sidebarDrawer"
    app
    class="sidebar"
    left
  >
    <div class="d-flex align-center justify-start">
      <v-img
        :src="logo"
        alt="Starter"
        max-height="65"
        max-width="65"
      />
      <h3>Gems Track</h3>
    </div>
    <v-list nav>
      <template
        v-for="(item, index) in sidebarData"
        :key="index"
      >
        <v-list-item
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.sidebar {
  padding: 2rem 1rem 4rem 0.7rem;
}
</style>
