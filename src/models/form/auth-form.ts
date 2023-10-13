export interface ResetPasswordI {
  email: string;
}

export interface LoginFormI extends ResetPasswordI {
  password: string;
}

export interface SignupFormI extends LoginFormI {
  fullname: string;
}

export interface ConfirmPasswordI {
  password: string;
  confirmPassword: string;
}
