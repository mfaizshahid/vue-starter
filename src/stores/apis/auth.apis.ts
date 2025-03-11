import type { GenericResponse } from "@/interfaces/app.interface";
import { IAuth } from "@/stores/modules/auth";
import { AuthUrls } from "@/stores/urls";
import axios, { type AxiosResponse } from "axios";
const emailRegister = async (
  payload: IAuth.AuthFormPayload
): Promise<AxiosResponse<IAuth.User>> => {
  return await axios.post<IAuth.User>(AuthUrls.EMAIL_REGISTER, payload);
};

const emailLogin = async (payload: IAuth.AuthFormPayload) => {
  const resp = await axios.post(AuthUrls.EMAIL_LOGIN, payload);
  return resp.data;
};

const refreshToken = async (
  payload: string
): Promise<IAuth.RefreshTokenResp> => {
  const url = `${AuthUrls.REFRESH_TOKEN}/${payload}`;
  const resp = await axios.get<GenericResponse<IAuth.RefreshTokenResp>>(url);
  return resp.data.data;
};

const fetchMe = async (): Promise<IAuth.FetchMeResp> => {
  const resp = await axios.get<GenericResponse<IAuth.FetchMeResp>>(AuthUrls.ME);
  return resp.data.data;
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
