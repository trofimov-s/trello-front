import { VALIDATION_MAP_KEYS } from '@enums/forms/validation-map-keys.enum';
import { FormField } from '@models/form/form-field.type';
import * as Yup from 'yup';

const VALIDATION_MAP: { [key in VALIDATION_MAP_KEYS]: (v?: string | number) => Yup.AnySchema } = {
  email: () => Yup.string().email('Invalid email').required('Required field'),
  min_length: (v) =>
    Yup.string()
      .required('Required field')
      .trim()
      .min(v as number, `Field should be at least ${v} characters`),
  required: () => Yup.string().trim().required(),
};

export function buildValidator(fields: FormField[]): Yup.ObjectSchema<{ [key: string]: string }> {
  const schema = fields.reduce(
    (prev, { validation }) => ({
      ...prev,
      [validation.field]: VALIDATION_MAP[validation.validatorKey](...(validation?.args || [])),
    }),
    {},
  );

  return Yup.object().shape({ ...schema });
}
