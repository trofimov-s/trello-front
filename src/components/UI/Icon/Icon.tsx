import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import './Icon.scss';

type Props = {
  extendedClass?: string;
  onClick?: () => void;
};

const Icon: FC<PropsWithChildren<Props>> = ({ children, extendedClass = '', onClick }) => {
  return (
    <span className={cn(['material-symbols-outlined', extendedClass])} onClick={onClick}>
      {children}
    </span>
  );
};

export default Icon;
