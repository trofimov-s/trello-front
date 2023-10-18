import { PropsWithChildren, forwardRef } from 'react';
import cn from 'classnames';

import './Button.scss';

type Props = {
  type?: 'submit' | 'button';
  role?: 'primary' | 'secondary' | 'icon';
  onClick: () => void;
  disabled?: boolean;
};

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(function Button(
  { children, role = 'primary', type = 'button', ...props },
  ref,
) {
  return (
    <button ref={ref} className={cn(['btn', `btn--${role}`])} type={type} {...props}>
      {children}
    </button>
  );
});

export default Button;
