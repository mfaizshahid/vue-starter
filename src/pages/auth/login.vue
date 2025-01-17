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
            :to="AppRoutes.Auth.SIGNUP"
          >
            Register
          </RouterLink>
        </div>
        <!--Content -->
        <AuthForm
          :submit-btn-text="submitBtnText"
          :title="formTitle"
          :subtitle="formSubtitle"
          :form-type="IApp.FormTypes.LOGIN"
          @submit="loginUser"
        />
      </div>
    </template>
  </AuthWrapper>

  <AppResendEmail
    :show-dialog="showEmailVerificationDialog"
    @close-dialog="showEmailVerificationDialog = false"
    @resend-email="resendEmail"
  />
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import {AppRoutes, IApp} from '@/interfaces';
// import { useEmailLogin, useResendEmailVerification } from '@/hooks/auth'
// import { useNotification } from "@kyvg/vue3-notification";
import { useAuthStore } from "@/stores";
import { IAuth } from "@/stores/modules/auth"
// import { AxiosResponse } from 'axios';
// noinspection TypeScriptCheckImport
import { definePage } from 'vue-router/auto'
definePage({
  meta: {
    requiresAuth: false,
    allowedStates: ['unauthenticated'],
  },
})
// *** Variables ***
const formTitle = "Welcome Back!" // Form title for login
const formSubtitle = "Log in to continue to your personalized chat experiences." // Form subtitle for login
const submitBtnText = "Log In" // Submit button text for login
// const { notify } = useNotification() // Notification
// const { mutate, isLoading } = useEmailLogin() // Register mutation
// const { mutate:resendMutate, isLoading: resendLoading } = useResendEmailVerification() // Register mutation
const authStore = useAuthStore() // Auth store
const showEmailVerificationDialog = ref<boolean>(false) // Show email verification badge


onBeforeMount(() => {
  authStore.setLoginPayload({email: "", password: "", firstName: undefined, lastName: undefined})
})
// *** Functions ***
/**
 * Login user function
 */
const loginUser = async (payload: IAuth.AuthFormPayload) => {
  // mutate(payload, {
  //   // Success callback
  //   onSuccess: (data: AxiosResponse<IAuth.AuthUserResponse>) => {
  //     notify({
  //       title: "Login Successful",
  //       text: "Welcome back! You're now logged in.",
  //       type: "success",
  //     });
  //     authStore.processLogin(data.data) // Process login
  //   },
  //   // Error callback
  //   onError: async (error: any) => {
  //     const errorResp = appUtils.extractAxiosErrorMessage(error) // Assuming you have a utility function to extract error messages
  //     if (errorResp.type === 'emailInactive') {
  //       showEmailVerificationDialog.value = true
  //     }
  //     notify({
  //       title: "Login Error",
  //       text: errorResp.msg,
  //       type: "error",
  //     });
  //   }
  // })
}

const resendEmail = () => {
  // resendMutate({ email: authStore.loginPayload.email }, {
  //   // Success callback
  //   onSuccess: () => {
  //     notify({
  //       title: "Email sent successfully",
  //       text: "Email verification link has been sent to your email.",
  //       type: "success",
  //     });
  //   },
  //   // Error callback
  //   onError: async (error: any) => {
  //     const status = error.response.status
  //     if (status !== 429) {
  //       const errorResp = appUtils.extractAxiosErrorMessage(error)
  //       notify({
  //         title: "Email sending failed",
  //         text: errorResp.msg,
  //         type: "error",
  //       });
  //     }
  //   }
  // })
  showEmailVerificationDialog.value = false
}
</script>
