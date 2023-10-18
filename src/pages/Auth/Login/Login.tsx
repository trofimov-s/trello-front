import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/UI';
import { ROUTES } from '@enums/routes.enum';
import Auth from '@components/Auth/Auth';
import { FORM_FIELDS } from './form-fields.constant';
import { useAppDispatch, useAppSelector } from '@store/index';
import AUTH_ACTIONS from '@store/auth/auth.actions';
import { LoginFormI } from '@models/form/auth-form';
import { AUTH_SELECTORS } from '@store/auth/auth-selectors';

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(AUTH_SELECTORS.selectAuthState);

  const navigateHanlder = (path: ROUTES) => navigate('/' + path);
  const loginHandler = (values: any) => dispatch(AUTH_ACTIONS.loginAsync(values as LoginFormI));

  return (
    <>
      <Auth
        formFields={FORM_FIELDS}
        submitHanlder={loginHandler}
        title="Welcome back!"
        ctaText="Sign In"
        isCtaDisabled={isLoading}
      >
        <Button disabled={isLoading} onClick={() => navigateHanlder(ROUTES.RESET)} role="secondary">
          Forgot Password?
        </Button>
        <Button
          disabled={isLoading}
          role="secondary"
          onClick={() => navigateHanlder(ROUTES.SIGNUP)}
        >
          Create account
        </Button>
      </Auth>
    </>
  );
};

export default LoginPage;
