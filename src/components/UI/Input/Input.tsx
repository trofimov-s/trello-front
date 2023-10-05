import { FC } from 'react';

import './Input.scss';
import cn from 'classnames';
import { useField } from 'formik';

type Props = {
  label: string;
  id: string;
  type: 'text' | 'password' | 'email';
  className?: string;
  name: string;
};

const Input: FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={props.id}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={cn({
          'form-field__input': true,
          'form-field__input--invalid': meta.touched && meta.error,
        })}
      />
      {meta.touched && meta.error ? (
        <span className="form-field__input-error">{meta.error}</span>
      ) : null}
    </div>
  );
};

export default Input;
