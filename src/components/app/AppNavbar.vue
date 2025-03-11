<script lang="ts" setup>
import { useAppStore, useAuthStore } from "@/stores";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const appStore = useAppStore();
const { sidebarDrawer } = storeToRefs(appStore);

const logoutUser = () => {
  authStore.logout();
};
</script>

<template>
  <!-- Navbar-->
  <v-app-bar
    :elevation="0"
    :height="120"
    app
    border="b"
    class="navbar"
    color="background"
    flat
  >
    <section class="d-flex ga-4 w-100">
      <!-- Route name -->
      <div class="base-card flex-grow-1">
        <div class="d-flex align-center ga-2">
          <v-app-bar-nav-icon
            @click.stop="appStore.setSidebarDrawer(!sidebarDrawer)"
          />
          <div v-if="$route.name !== $router.currentRoute.value.name">
            <!--            <v-img :alt="$route.meta.title as string" :src="utils.constructImageUrl($route.meta.icon)" max-height="auto"-->
            <!--                   width="30"/>-->
            <v-icon>{{ $route.meta.icon }}</v-icon>
          </div>
          <div v-else>
            <!--            <v-img :alt="$route.meta.title as string" :src="utils.constructImageUrl($route.meta.activeIcon)"-->
            <!--                   max-height="auto"-->
            <!--                   width="30"/>-->
            <v-icon
              :class="{
                'mdi-spin mdi-rotate-45': $route.meta.iconClasses,
              }"
              color="primary"
            >
              {{ $route.meta.activeIcon }}
            </v-icon>
          </div>
          <h1>{{ $route.meta.title }}</h1>
        </div>
      </div>

      <div class="base-card cursor-pointer">
        <div class="d-flex">
          <v-avatar
            color="surface-light"
            image="https://cdn.vuetifyjs.com/images/john.png"
            size="32"
          />
          <h3 v-if="authStore.user">
            {{ authStore.user.name }}
          </h3>
        </div>

        <v-menu activator="parent">
          <v-list density="compact" nav>
            <v-list-item
              append-icon="mdi-logout"
              link
              title="Logout"
              @click="logoutUser"
            />
          </v-list>
        </v-menu>
      </div>
    </section>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/styles/cards";
@use "@/styles/variables" as *;

.navbar {
  padding: 0 1rem;

  .base-card {
    @extend .base-card;
    border: 2px solid map.get($app-light-colors, "border");
    border-radius: 1.5rem;
  }
}

//
//.app-bar {
//  border: 1.5px solid map.get($takafo-light-colors, 'border');
//}
</style>
