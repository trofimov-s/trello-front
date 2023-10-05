import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.scss';
import { Button } from '@components/UI';
import { ROUTES } from '@enums/routes.enum';
import Auth from '@components/Auth/Auth';
import { FORM_FIELDS } from './form-fields.constant';

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const navigateHanlder = (path: ROUTES) => navigate('/' + path);

  return (
    <Auth
      formFields={FORM_FIELDS}
      submitHanlder={(values) => console.log(values)}
      title="Welcome back!"
      ctaText="Sign In"
    >
      <Button onClick={() => console.log('forgot password')} role="secondary">
        Forgot Password?
      </Button>
      <Button role="secondary" onClick={() => navigateHanlder(ROUTES.SIGNUP)}>
        Create account
      </Button>
    </Auth>
  );
};

export default LoginPage;
