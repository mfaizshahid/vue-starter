<template>
  <AuthWrapper>
    <template #slider>
      <div class="d-flex justify-center align-center fill-height">
        <v-img
          src="@/assets/auth/dynamic-messaging.webp"
          max-height="800px"
        />
      </div>
    </template>
    <template #content>
      <div class="pa-10 fill-height">
        <!-- Login link -->
        <div class="text-end">
          <RouterLink
            class="text-body-1 text-decoration-none"
            :to="AppRoutes.Auth.LOGIN"
          >
            Login
          </RouterLink>
        </div>
        <!--Content -->
        <AuthForm
          :loading="isPending"
          :submit-btn-text="submitBtnText"
          :title="formTitle"
          :subtitle="formSubtitle"
          :form-type="IApp.FormTypes.REGISTER"
          @submit="registerUser"
        />
      </div>
    </template>
  </AuthWrapper>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import {AppRoutes, IApp} from '@/interfaces';
import { useEmailRegister } from "@/hooks/auth"
import { useNotification } from "@kyvg/vue3-notification";
import router from '@/router'
import { IAuth } from '@/stores/modules/auth'
import { useAuthStore } from '@/stores'
import formUtils from "@/utils/form.utils";
import { definePage } from 'vue-router/auto'
definePage({
  meta: {
    requiresAuth: false,
    allowedStates: ['unauthenticated'],
    layout: 'default'
  },
})

// *** Variables ***
const formTitle = "Start Conversing with Innovation" // Form title
const formSubtitle = "Create your account to unlock personalized chat experiences and more." // Form subtitle
const submitBtnText = "Create Account" // Submit button text
const { notify } = useNotification() // Notification
const { mutate, isPending } = useEmailRegister() // Register mutation
const authStore = useAuthStore() // Auth store

onBeforeMount(() => {
  authStore.setLoginPayload({email: "", password: "", name: undefined})
})
// *** Functions ***

/**
 * Register user function
 */
const registerUser = async (payload: IAuth.AuthFormPayload) => {
  mutate(payload, {
    // Success callback
    onSuccess: async () => {
      notify({
        title: "User Registered",
        text: "Account registered. Please verify your email!",
        type: "success",
      });
      await router.push(AppRoutes.Auth.LOGIN)
    },
    // Error callback
    onError: async (error: Error) => {
      const errorMsg = formUtils.extractErrorMsg(error)
      notify({
        title: "Registration Error",
        text: errorMsg,
        type: "error",
      });
    }
  })
}
</script>
