import { BaseUrls } from "@/stores/urls";

const ME = BaseUrls.AUTH_BASE_URL + "/me";
const REFRESH_TOKEN = BaseUrls.AUTH_BASE_URL + "/refresh";
const EMAIL_REGISTER = BaseUrls.AUTH_BASE_URL + "/register";
const EMAIL_LOGIN = BaseUrls.AUTH_BASE_URL + "/login";
const RESEND_EMAIL_VERIFICATION = BaseUrls.AUTH_BASE_URL + "/email/resend";
const CONFIRM_EMAIL = BaseUrls.AUTH_BASE_URL + "/email/confirm";
const FORGOT_PASSWORD = BaseUrls.AUTH_BASE_URL + "/forgot/password";
const RESET_PASSWORD = BaseUrls.AUTH_BASE_URL + "/reset/password";
export default {
  EMAIL_REGISTER,
  EMAIL_LOGIN,
  ME,
  REFRESH_TOKEN,
  RESEND_EMAIL_VERIFICATION,
  CONFIRM_EMAIL,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
};
