import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import './Signup.scss';
import { Button } from '@components/UI';
import { ROUTES } from '@enums/routes.enum';
import Auth from '@components/Auth/Auth';
import { FormField } from '@models/form/form-field.type';
import { FORM_FIELDS } from '@pages/Login/form-fields.constant';
import { VALIDATION_MAP_KEYS } from '@enums/forms/validation-map-keys.enum';

const SignupPage: FC = () => {
  const navigate = useNavigate();
  const formFields: FormField[] = [
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

  const navigateHanlder = (path: ROUTES) => navigate('/' + path);

  return (
    <Auth
      formFields={formFields}
      submitHanlder={(values) => console.log(values)}
      title="Let’s go!"
      ctaText="Sign Up"
    >
      <Button role="secondary" onClick={() => navigateHanlder(ROUTES.LOGIN)}>
        Already a user? Sign In
      </Button>
    </Auth>
  );
};

export default SignupPage;
