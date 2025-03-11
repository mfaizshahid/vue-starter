const BASE_URL =
  (import.meta.env.VITE_APP_BACKEND_API_URL as string) ??
  "http://localhost:5000/api/v1";

const AUTH_BASE_URL = BASE_URL + "/auth";
export default {
  BASE_URL,
  AUTH_BASE_URL
};
