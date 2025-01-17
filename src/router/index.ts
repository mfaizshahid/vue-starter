/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
import { routes } from "vue-router/auto-routes";
import { useAuthStore } from "@/stores";
import { storeToRefs } from "pinia";
import {IApp} from "@/interfaces";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
});

router.beforeEach(async (to) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  document.title = (to as any).meta?.title || "Starter";
  const authStore = useAuthStore();
  const { state, tokens } = storeToRefs(authStore);
  const accessToken = tokens.value?.access_token;
  // If the user is unauthenticated and there is an access token, set the app state to user
  if (state.value === IApp.AppStates.unauthenticated && accessToken) {
    await authStore.initUser();
  }
  const routeMetaState = to.meta?.allowedStates
    ? (to.meta.allowedStates as IApp.AppStates)
    : [IApp.AppStates.unauthenticated];
  // If route state is valid => allow navigation
  if (routeMetaState.includes(state.value)) {
    if (to.fullPath === "/") {
      return authStore.rehydrateNavigation();
    }
    return true;
  } else {
    // If route state in not know => navigate based on user state
    return authStore.rehydrateNavigation();
  }
});
// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
