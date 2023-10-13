import { VALIDATION_MAP_KEYS } from '@enums/forms/validation-map-keys.enum';
import { FormFieldI } from '@models/form/form-field.type';
import * as Yup from 'yup';

const VALIDATION_MAP: { [key in VALIDATION_MAP_KEYS]: (...args: (string | number)[]) => Yup.AnySchema } = {
  email: () => Yup.string().email('Invalid email').required('Required field'),
  min_length: (v) =>
    Yup.string()
      .required('Required field')
      .trim()
      .min(v as number, `Field should be at least ${v} characters`),
  required: () => Yup.string().trim().required(),
  equals: (ref, mess) => Yup.string().required('Required field').oneOf([Yup.ref(ref as string), null], mess as string),
};

export function buildValidator(fields: FormFieldI[]): Yup.ObjectSchema<{ [key: string]: string }> {
  const schema = fields.reduce(
    (prev, { validation }) => ({
      ...prev,
      [validation.field]: VALIDATION_MAP[validation.validatorKey](...(validation?.args || [])),
    }),
    {},
  );

  return Yup.object().shape({ ...schema });
}
