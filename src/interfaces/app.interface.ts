import type { RouteMeta } from "vue-router";

export enum FormTypes {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

export enum AppRoles {
  ADMIN = "admin",
}
export interface ErrorMsgResponse {
  statusCode: string;
  statusMessage: string;
}

export interface CustomRouteMeta extends RouteMeta {
  requiresAuth: boolean;
  allowedStates: string[];
  layout: string;
  title?: string;
  icon?: string;
  activeIcon?: string;
}

export interface GenericResponse<T> {
  data: T;
  statusCode: number;
  statusMessage: string;
}

export enum AppStates {
  "unauthenticated" = "unauthenticated",
  "emailVerificationPending" = "emailVerificationPending",
  "emailVerificationComplete" = "emailVerificationComplete",
  "user" = "user",
  "admin" = "admin",
  "rootError" = "rootError",
}
