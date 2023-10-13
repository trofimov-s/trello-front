import { ConfirmPasswordI } from '@models/form/auth-form';

export interface ConfirmPasswordPayloadI extends ConfirmPasswordI {
  resetToken: string;
  userId: string;
}
