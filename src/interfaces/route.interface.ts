const Auth = {
  ROOT: "/auth",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/register",
  EMAIL_VERIFICATION: "/auth/email-verification",
  RESET_PASSWORD: "/auth/reset-password",
} as const;

const User = {
  ROOT: "/user",
  DASHBOARD: "/user/dashboard",
} as const;

const Admin = {
  ROOT: "/admin",
  DASHBOARD: "/admin/dashboard",
} as const;

export default {
  Auth,
  User,
  Admin,
};
