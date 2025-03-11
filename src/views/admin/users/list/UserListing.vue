<template>
  <v-container>
    <!-- Row for filter -->
    <v-row>
      <v-col cols="12">
        <h1>Stats</h1>
      </v-col>
    </v-row>
    <v-col cols="12" />
    <user-list-table />
    <v-row />
  </v-container>
</template>
<script setup lang="ts">
import UserListTable from '@/views/admin/users/list/UserListTable.vue';
</script>