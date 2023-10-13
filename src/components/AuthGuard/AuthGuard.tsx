import { ROUTES } from '@enums/routes.enum';
import { AUTH_SELECTORS } from '@store/auth/auth-selectors';
import { useAppSelector } from '@store/index';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  inverse?: boolean;
};

const AuthGuard: FC<PropsWithChildren<Props>> = ({ children, inverse = false }) => {
  const { isAuth } = useAppSelector(AUTH_SELECTORS.selectAuthState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth && !inverse) {
      navigate('/' + ROUTES.LOGIN);
    }

    if (isAuth && inverse) {
      navigate('/');
    }
  }, [isAuth, inverse, navigate]);

  return (isAuth && !inverse) || (!isAuth && inverse) ? children : null;
};

export default AuthGuard;
