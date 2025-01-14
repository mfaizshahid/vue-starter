<script lang="ts" setup>
import logo from '@/assets/logo.png'
import { AppRoutes } from "@/interfaces";
import { useAppStore } from "@/stores";
import { storeToRefs } from "pinia";
const appStore = useAppStore();
const { sidebarDrawer } = storeToRefs(appStore);

</script>

<template>
    <v-navigation-drawer app class="sidebar" left v-model="sidebarDrawer">
        <div class="d-flex align-center justify-start">
            <v-img :src="logo" alt="Starter" max-height="65" max-width="65" />
            <h3>Starter</h3>
        </div>
        <v-list nav>
            <v-list-item :to="AppRoutes.User.DASHBOARD" prepend-icon="mdi-view-dashboard" title="Dashboard"
                value="dashboard"></v-list-item>

        </v-list>
    </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.sidebar {
    padding: 2rem 1rem 4rem 0.7rem;
}
</style>