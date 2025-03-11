import axios, { type InternalAxiosRequestConfig } from "axios";
export default () => {
  axios.interceptors.request.use(
    async function (config: InternalAxiosRequestConfig) {
      // Append necessary information in headers
      if (config.headers && !config?.url?.includes("auth/generate-token")) {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
};
