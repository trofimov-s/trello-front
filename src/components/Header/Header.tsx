import { FC } from 'react';

import './Header.scss';
import useColorSchema from '@hooks/use-color-schema';
import { Button, Icon } from '@components/UI';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@store/index';
import { AUTH_SELECTORS } from '@store/auth/auth-selectors';

const Header: FC = () => {
  const { isAuth } = useAppSelector(AUTH_SELECTORS.selectAuthState);
  const [currentSchema, setCurrentSchema] = useColorSchema();

  const changeModeHandler = (): void =>
    setCurrentSchema(currentSchema === 'dark' ? 'light' : 'dark');

  return (
    <header className="header container">
      <Link to={'/'} className="header__logo">
        <img className="header__logo-img" src="/src/assets/icons/logo.svg" alt="logo" />
      </Link>
      <div className="header__actions">
        <Button role="icon" onClick={changeModeHandler}>
          <Icon>{currentSchema === 'dark' ? 'dark_mode' : 'light_mode'}</Icon>
        </Button>

        {isAuth && (
          <Button role="icon" onClick={changeModeHandler}>
            <Icon extendedClass="text-4xl">account_circle</Icon>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
