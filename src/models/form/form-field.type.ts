import { VALIDATION_MAP_KEYS } from '@enums/forms/validation-map-keys.enum';

export type ValidationField = {
  field: string;
  validatorKey: VALIDATION_MAP_KEYS;
  args?: (string | number)[];
};

export type FormField = {
  name: string;
  value?: string;
  label: string;
  type: 'email' | 'text' | 'password';
  validation: ValidationField;
};
