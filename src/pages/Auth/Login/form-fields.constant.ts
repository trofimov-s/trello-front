import { VALIDATION_MAP_KEYS } from '@enums/forms/validation-map-keys.enum';
import { FormFieldI } from '@models/form/form-field.type';

export const FORM_FIELDS: FormFieldI[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    validation: {
      field: 'email',
      validatorKey: VALIDATION_MAP_KEYS.EMAIL,
    },
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    validation: {
      field: 'password',
      validatorKey: VALIDATION_MAP_KEYS.MIN_LENGTH,
      args: [8],
    },
  },
];
