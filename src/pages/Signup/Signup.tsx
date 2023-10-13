import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/UI';
import { ROUTES } from '@enums/routes.enum';
import Auth from '@components/Auth/Auth';
import { FormFieldI } from '@models/form/form-field.type';
import { FORM_FIELDS } from '@pages/Login/form-fields.constant';
import { VALIDATION_MAP_KEYS } from '@enums/forms/validation-map-keys.enum';
import { useAppDispatch, useAppSelector } from '@store/index';
import { AUTH_SELECTORS } from '@store/auth/auth-selectors';
import { SignupFormI } from '@models/form/auth-form';
import AUTH_ACTIONS from '@store/auth/auth.actions';

const SignupPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(AUTH_SELECTORS.selectAuthState);

  const formFields: FormFieldI[] = [
    {
      name: 'fullname',
      type: 'text',
      label: 'Fullname',
      validation: {
        field: 'fullname',
        validatorKey: VALIDATION_MAP_KEYS.MIN_LENGTH,
        args: [2],
      },
    },
    ...FORM_FIELDS,
  ];

  const signupHandler = (values: any) => {
    console.log(values);
    dispatch(AUTH_ACTIONS.signupAsync(values as SignupFormI));
  };

  const navigateHanlder = (path: ROUTES) => navigate('/' + path);

  return (
    <Auth
      formFields={formFields}
      submitHanlder={signupHandler}
      title="Let’s go!"
      ctaText="Sign Up"
      isCtaDisabled={isLoading}
    >
      <Button disabled={isLoading} role="secondary" onClick={() => navigateHanlder(ROUTES.LOGIN)}>
        Already a user? Sign In
      </Button>
    </Auth>
  );
};

export default SignupPage;
