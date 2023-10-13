import { Form, Formik } from 'formik';
import { FC, Ref } from 'react';

import { FormFieldI } from '@models/form/form-field.type';
import { ObjV } from '@models/obj-v.interface';
import { Input } from '@components/UI';
import * as Yup from 'yup';

type Prop = {
  fields: FormFieldI[];
  submitHanlder: (values: ObjV<string>) => void;
  innerRef: Ref<any>;
  className?: string;
  validationSchema: Yup.ObjectSchema<ObjV<string>>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
};

const BaseForm: FC<Prop> = ({
  fields,
  className = '',
  submitHanlder,
  innerRef,
  validationSchema,
  validateOnBlur = true,
  validateOnChange = true,
}) => {
  const initialValues: { [key: string]: string } = fields.reduce(
    (prev, field) => ({
      ...prev,
      [field.name]: field?.value || '',
    }),
    {},
  );

  return (
    <Formik
      innerRef={innerRef}
      initialValues={initialValues}
      onSubmit={submitHanlder}
      validationSchema={validationSchema}
      validateOnChange={validateOnChange}
      validateOnBlur={validateOnBlur}
    >
      <Form className={className}>
        {fields.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            name={field.name}
            label={field.label}
            id={field.name}
          />
        ))}
      </Form>
    </Formik>
  );
};

export default BaseForm;
