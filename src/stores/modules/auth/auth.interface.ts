
export interface AuthUserResponse extends Tokens {
  user: User;
}
export interface User extends Role {
  email: string;
  role_details: Role;
}

export interface Role {
  name: string;
  id: string;
  active: boolean;
  created_at: string;
}

export interface Tokens {
  access_token: string;
  refresh_token: string;
}

export interface AuthFormPayload {
  email: string;
  password: string;
  name?: string;
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
