import axios from "axios";
import { useAuthStore } from "@/stores";
import { AuthApis } from "@/stores/apis";
import { notify } from "@kyvg/vue3-notification";
export default () => {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function (error): Promise<any> {
      const authStore = useAuthStore();
      // Response undefined means => backend didn't receive request from frontend
      // Means that firewall blocks backend app ip or any other issue
      if (!error.response) {
        error.response = {
          data: {
            message: "Network Error",
          },
        };
      }
      // If response status is 401 => refresh token
      if (
        error.response.status === 401 &&
        !error?.request?.responseURL?.includes("auth/generate-token")
      ) {
        const _refreshToken = localStorage.getItem("refresh_token");
        // If refresh token exist => get new token
        if (_refreshToken) {
          try {
            // Get new token from refresh token
            const response = await AuthApis.refreshToken(_refreshToken);
            authStore.saveTokensToStorage(response.tokens);
            authStore.setTokens(response.tokens); // Update token in store

            return axios.request(error.config); // Retry request
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (_) {
            authStore.logout();
            return Promise.reject("Invalid Refresh Token");
          }
        } else {
          authStore.logout();
          return Promise.reject("Invalid Refresh Token");
        }
      } else if (
        error.response.status === 401 &&
        error?.request?.responseURL?.includes("auth/generate-token")
      ) {
        // If refresh token is invalid => logout user
        authStore.logout();
        return Promise.reject("Invalid Refresh Token");
      } else if (error.response.status === 429) {
        notify({
          type: "error",
          text: "Too many requests. Please try again later.",
          title: "Limit Reached",
        });
        return Promise.reject("Too many requests");
      } else {
        notify({
          type: "error",
          text: error.response.data.statusMessage,
          title: "Error",
        });
        return Promise.reject(error.response.data);
      }
    }
  );
};
