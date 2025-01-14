import { IAuth } from "@/stores/modules/auth";
import { AuthUrls } from "@/stores/urls";
import axios, { type AxiosRequestConfig } from "axios";
const emailRegister = async (payload: IAuth.AuthFormPayload) => {
  return await axios.post(AuthUrls.EMAIL_REGISTER, payload);
};

const emailLogin = async (payload: IAuth.AuthFormPayload) => {
  return await axios.post(AuthUrls.EMAIL_LOGIN, payload);
};

const refreshToken = async (config: AxiosRequestConfig) => {
  return await axios.post(AuthUrls.REFRESH_TOKEN, null, config);
};

const fetchMe = async <T>() => {
  return await axios.get<T>(AuthUrls.ME);
};

const resendEmailVerification = async (
  payload: IAuth.ResendEmailVerificationPayload
) => {
  return await axios.post(AuthUrls.RESEND_EMAIL_VERIFICATION, payload);
};

const confirmEmail = async (payload: IAuth.ConfirmEmailPayload) => {
  return await axios.post(AuthUrls.CONFIRM_EMAIL, payload);
};

const forgotPassword = async (
  payload: IAuth.ResendEmailVerificationPayload
) => {
  return await axios.post(AuthUrls.FORGOT_PASSWORD, payload);
};

const resetPassword = async (payload: IAuth.ResetPasswordPayload) => {
  return await axios.post(AuthUrls.RESET_PASSWORD, payload);
};

export default {
  emailRegister,
  emailLogin,
  refreshToken,
  fetchMe,
  resendEmailVerification,
  confirmEmail,
  resetPassword,
  forgotPassword,
};
