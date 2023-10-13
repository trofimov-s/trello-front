import { FC, PropsWithChildren, useRef } from 'react';

import './Auth.scss';
import { BaseForm, Button } from '@components/UI';
import { FormFieldI } from '@models/form/form-field.type';
import { buildValidator } from '@utils/build-validator.function';

type Props = {
  title: string;
  submitHanlder: (values: Record<string, string>) => void;
  ctaText: string;
  formFields: FormFieldI[];
  isCtaDisabled: boolean;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
};

const Auth: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  submitHanlder,
  formFields,
  ctaText,
  isCtaDisabled,
  validateOnChange,
  validateOnBlur,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const validationSchema = buildValidator(formFields);

  return (
    <div className="auth-wrapper">
      <section className="img-block">
        <div className="img-block__wrapper">
          <picture>
            <source media="(max-width: 1023px)" srcSet="/src/assets/icons/logo.svg" />
            <img src="/src/assets/img/kanban-board.svg" alt="welcome-pic" />
          </picture>
        </div>
        <h2 className="img-block__title">
          <strong>Trello</strong> brings all your tasks, teammates, and tools together
        </h2>
      </section>
      <section className="form-block">
        <h3 className="form-block__title">{title}</h3>
        <BaseForm
          fields={formFields}
          innerRef={formRef}
          submitHanlder={submitHanlder}
          className="auth-form"
          validationSchema={validationSchema}
          validateOnChange={validateOnChange}
          validateOnBlur={validateOnBlur}
        />
        <div className="form-block__actions">
          <Button disabled={isCtaDisabled} onClick={() => formRef.current?.handleSubmit()}>
            {ctaText}
          </Button>
          {children}
        </div>
      </section>
    </div>
  );
};

export default Auth;
