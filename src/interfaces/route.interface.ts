export namespace AppRoutes {
  export const Auth = {
    ROOT: "/auth",
    LOGIN: "/auth/login",
    SIGNUP: "/auth/register",
    EMAIL_VERIFICATION: "/auth/email-verification",
    RESET_PASSWORD: "/auth/reset-password",
  } as const;

  export const User = {
    ROOT: "/user",
    DASHBOARD: "/user/dashboard",
  } as const;
}
