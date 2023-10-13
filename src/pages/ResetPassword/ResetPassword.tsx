import { FC } from 'react';

import Auth from '@components/Auth/Auth';
import { FORM_FIELDS } from '@pages/Login/form-fields.constant';
import { AUTH_SELECTORS } from '@store/auth/auth-selectors';
import { useAppDispatch, useAppSelector } from '@store/index';
import AUTH_ACTIONS from '@store/auth/auth.actions';
import { ResetPasswordI } from '@models/form/auth-form';

const ResetPassword: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(AUTH_SELECTORS.selectAuthState);

  const submitHanlder = (value: any) => {
    console.log(value);
    dispatch(AUTH_ACTIONS.resetPasswordAsync(value as ResetPasswordI));
  };

  return (
    <Auth
      formFields={FORM_FIELDS.slice(0, 1)}
      submitHanlder={submitHanlder}
      title="Reset your account password"
      ctaText="Reset Password"
      isCtaDisabled={isLoading}
    />
  );
};

export default ResetPassword;
