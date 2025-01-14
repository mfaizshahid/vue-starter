import { IApp } from "@/interfaces";

export interface AuthUserResponse extends Tokens {
  user: User;
}
export interface User {
  id: string;
  email: string;
  provider: IApp.AuthProvidersEnum;
  socialId: null;
  firstName: string;
  lastName: string;
  role: {
    id: IApp.RoleEnum;
  };
  status: {
    id: IApp.StatusEnum;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Tokens {
  refreshToken: string;
  token: string;
  tokenExpires: number;
}
export interface AuthFormPayload {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export enum AppStates {
  "unauthenticated" = "unauthenticated",
  "emailVerificationPending" = "emailVerificationPending",
  "emailVerificationComplete" = "emailVerificationComplete",
  "user" = "user",
  "admin" = "admin",
  "rootError" = "rootError",
}

export interface ResendEmailVerificationPayload {
  email: string;
}

export interface ConfirmEmailPayload {
  hash: string;
}

export interface ResetPasswordPayload
  extends ResendEmailVerificationPayload,
    ConfirmEmailPayload {}
