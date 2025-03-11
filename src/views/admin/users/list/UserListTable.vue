<template>
  <v-card title="Users">
    <v-card-text>
      <h1>Filters</h1>
      <v-divider />
      <!-- Search & Add new user button -->
      <v-container>
        <v-row
          align="center"
          justify="end"
        >
          <v-col
            cols="12"
            sm="6"
            md="3"
            lg="2"
          >
            <v-text-field
              label="Search"
              variant="solo"
              :hide-details="true"
            />
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
            lg="2"
          >
            <v-btn
              color="primary"
              variant="elevated"
              block
              class="text-capitalize"
            >
              Add New User
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <h2>Data table</h2>
    </v-card-text>
  </v-card>
</template>