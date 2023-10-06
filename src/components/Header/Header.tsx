import { FC } from 'react';

import './Header.scss';
import useColorSchema from '@hooks/use-color-schema';
import { Button, Icon } from '@components/UI';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const [currentSchema, setCurrentSchema] = useColorSchema();

  const changeModeHandler = (): void =>
    setCurrentSchema(currentSchema === 'dark' ? 'light' : 'dark');

  return (
    <header className="header container">
      <Link to={'/'} className="header__logo">
        <img className="header__logo-img" src="src/assets/icons/logo.svg" alt="logo" />
      </Link>
      <div className="header__actions">
        <Button role="icon" onClick={changeModeHandler}>
          {currentSchema === 'dark' ? (
            <Icon extendedClass="text-white">dark_mode</Icon>
          ) : (
            <Icon extendedClass="text-gray-500">light_mode</Icon>
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
