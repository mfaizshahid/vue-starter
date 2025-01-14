import type {RouteMeta} from "vue-router";

export enum FormTypes {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

export enum RoleEnum {
  "admin" = 1,
  "user" = 2,
}

export enum StatusEnum {
  "active" = 1,
  "inactive" = 2,
}

export enum AuthProvidersEnum {
  email = "email",
  facebook = "facebook",
  google = "google",
  twitter = "twitter",
  apple = "apple",
}

export interface ErrorMsgResponse {
  msg: string;
  type: string;
}

export interface CustomRouteMeta extends RouteMeta {
  requiresAuth: boolean;
  allowedStates: string[];
  layout: string;
  title: string;
  icon: string;
  activeIcon: string;
}

export interface GenericResponse<T> {
  data: T
}
