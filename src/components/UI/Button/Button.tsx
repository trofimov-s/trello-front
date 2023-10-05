import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import './Button.scss';

type Props = {
  type?: 'submit' | 'button';
  role?: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
};

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  role = 'primary',
  type = 'button',
  ...props
}) => {
  return (
    <button className={cn(['btn', `btn--${role}`])} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
