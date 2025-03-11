<template>
  <AuthWrapper>
    <template #slider>
      <div class="d-flex justify-center align-center fill-height">
        <v-img src="@/assets/auth/dynamic-messaging.webp" max-height="800px" />
      </div>
    </template>

    <template #content>
      <div class="pa-10 fill-height">
        <!-- Login link -->
        <div class="text-end">
          <!-- <RouterLink
            class="text-body-1 text-decoration-none"
            :to="AppRoutes.Auth.SIGNUP"
          >
            Register
          </RouterLink> -->
        </div>
        <!--Content -->
        <AuthForm
          :submit-btn-text="submitBtnText"
          :title="formTitle"
          :subtitle="formSubtitle"
          :form-type="IApp.FormTypes.LOGIN"
          :loading="isPending"
          @submit="loginUser"
        />
      </div>
    </template>
  </AuthWrapper>
</template>

<script lang="ts" setup>
import { useEmailLogin } from "@/hooks/auth";
import { IApp } from "@/interfaces";
import { useAuthStore } from "@/stores";
import { IAuth } from "@/stores/modules/auth";
import { useNotification } from "@kyvg/vue3-notification";
import type { AxiosResponse } from "axios";
definePage({
  name: "login",
  meta: {
    requiresAuth: false,
    layout: "default",
    allowedStates: ["unauthenticated"],
  },
});
// *** Variables ***
const formTitle = "Welcome Back!"; // Form title for login
const formSubtitle =
  "Log in to continue to your personalized chat experiences."; // Form subtitle for login
const submitBtnText = "Log In"; // Submit button text for login
const { notify } = useNotification(); // Notification
const { mutate, isPending } = useEmailLogin(); // Login mutation
const authStore = useAuthStore(); // Auth store

onBeforeMount(() => {
  authStore.setLoginPayload({ email: "", password: "" });
});
// *** Functions ***
/**
 * Login user function
 */
const loginUser = async (payload: IAuth.AuthFormPayload) => {
  mutate(payload, {
    // Success callback
    onSuccess: (data: AxiosResponse<IAuth.AuthUserResponse>) => {
      notify({
        title: "Login Successful",
        text: "Welcome back! You're now logged in.",
        type: "success",
      });
      authStore.processLogin(data.data); // Process login
    },
  });
};
</script>
