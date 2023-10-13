import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Auth from '@components/Auth/Auth';
import { NEW_PASS_FORM_FIELDS } from './new-pass-form-fields.constant';
import { useAppDispatch, useAppSelector } from '@store/index';
import { AUTH_SELECTORS } from '@store/auth/auth-selectors';
import { ConfirmPasswordI } from '@models/form/auth-form';
import AUTH_ACTIONS from '@store/auth/auth.actions';
import { ROUTES } from '@enums/routes.enum';
import { ConfirmPasswordPayloadI } from '@models/api/confirm-password-payload.interface';

const NewPassword: FC = () => {
  const { resetToken, uid } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector(AUTH_SELECTORS.selectAuthState);
  console.log('reset', resetToken);
  console.log('id', uid);

  const successRedirectFn = () => {
    navigate('/' + ROUTES.LOGIN)
  };

  const submitHanlder = (value: any) => {
    console.log(value as ConfirmPasswordI);
    const credentials: ConfirmPasswordPayloadI = {
      resetToken,
      userId: uid,
      ...value
    }

    dispatch(AUTH_ACTIONS.resetPasswordConfirmAsync({ navigateFn: successRedirectFn, credentials }))
  }

  return (
    <Auth
      formFields={NEW_PASS_FORM_FIELDS}
      submitHanlder={submitHanlder}
      title="Enter new password"
      ctaText="Confirm"
      isCtaDisabled={isLoading}
      validateOnChange={false}
      validateOnBlur={false}
    />
  );
};

export default NewPassword;
