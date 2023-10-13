import { VALIDATION_MAP_KEYS } from '@enums/forms/validation-map-keys.enum';
import { FormFieldI } from '@models/form/form-field.type';

export const NEW_PASS_FORM_FIELDS: FormFieldI[] = [
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    validation: {
      field: 'password',
      validatorKey: VALIDATION_MAP_KEYS.EQUALS,
      args: ['confirmPassword', "Fields must be equivalent."],
    },
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm password',
    validation: {
      field: 'confirmPassword',
      validatorKey: VALIDATION_MAP_KEYS.EQUALS,
      args: ['password', "Fields must be equivalent."],
    },
  },
]