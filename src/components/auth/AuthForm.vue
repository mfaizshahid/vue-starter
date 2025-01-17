<template>
  <div class="fill-height d-flex align-center justify-center">
    <!-- Content wrapper -->
    <div>
      <!-- Heading -->
      <h4 class="text-h4 font-weight-bold text-center">
        {{ props.title }}
      </h4>
      <!-- Sub title -->
      <p class="text-body-2 text-grey mt-1 text-center">
        {{ props.subtitle }}
      </p>
      <!-- Form -->
      <v-form
        v-model="authForm"
        class="mt-8"
        lazy-validation
        @submit.prevent="submitForm"
      >
        <template v-if="props.formType === IApp.FormTypes.REGISTER">
          <!-- Full name form field -->
          <v-row>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="authStore.loginPayload.name"
                :rules="nameRule"
                label="Full Name"
                variant="outlined"
                flat
              />
            </v-col>
          </v-row>
        </template>
        <!-- Email form field -->
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="authStore.loginPayload.email"
              type="email"
              :rules="emailRule"
              label="Email"
              variant="outlined"
              flat
            />
          </v-col>
        </v-row>
        <!-- Password form field -->
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="authStore.loginPayload.password"
              :rules="passwordRule"
              label="Password"
              variant="outlined"
              flat
              type="password"
            />
          </v-col>
        </v-row>
        <!-- Forget password link-->
        <template v-if="formType === IApp.FormTypes.LOGIN">
          <div class="text-end mb-8">
            <RouterLink
              class="text-body-1 text-decoration-none"
              :to="AppRoutes.Auth.RESET_PASSWORD"
            >
              Forgot Password?
            </RouterLink>
          </div>
        </template>
        <!-- Submit button -->
        <v-btn
          height="46"
          :loading="loading"
          :disabled="!authForm"
          variant="elevated"
          block
          type="submit"
          color="primary"
          class="text-capitalize"
        >
          {{ props.submitBtnText }}
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formUtils } from '@/utils'
import {AppRoutes, IApp} from '@/interfaces'
import { ref } from 'vue';
import { IAuth } from '@/stores/modules/auth';
import { useAuthStore } from '@/stores'
import { RouterLink } from 'vue-router'


const authForm = ref(false) // Form validation state
const authStore = useAuthStore()

// Props
const props = defineProps<{
    title: string, // Form title
    subtitle: string, // Form subtitle
    formType: IApp.FormTypes, // Form type
    submitBtnText: string, // Submit button text
    loading?: boolean // Loading state

}>();

// Emits
const emits = defineEmits<{
    submit: [
        (IAuth.AuthFormPayload)
    ]
}>()
//  name field rule
const nameRule = [
    formUtils.requiredRule('Name is required'),
]

// Form email field rule
const emailRule = [
    formUtils.requiredRule('Email is required'),
    formUtils.emailFormatRule('Email is invalid')
]
// Form password field rule
const passwordRule = [
    formUtils.requiredRule('Password is required'),
    formUtils.minLengthRule('Password must be at least 8 characters'),
    formUtils.maxLengthRule('Password must be at most 16 characters'),
    formUtils.passwordFormatRule()
]

// Submit form
const submitForm = () => {
    // Emit the form data to the parent component
    emits('submit', authStore.loginPayload)
}

</script>
