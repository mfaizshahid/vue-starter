<template>
  <v-row class="fill-height ma-0">
    <v-col
      cols="12"
      md="6"
      class="bg-info-dark"
    >
      <slot name="slider" />
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <slot name="content" />
    </v-col>
  </v-row>
</template>
