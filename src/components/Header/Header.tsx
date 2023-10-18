import { FC, useRef, useState } from 'react';

import './Header.scss';
import useColorSchema from '@hooks/use-color-schema';
import { Button, Icon } from '@components/UI';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@store/index';
import { AUTH_SELECTORS } from '@store/auth/auth-selectors';
import OverlayHost, { Content } from '@components/UI/Overlays/OverlayHost/OverlayHost';

const Header: FC = () => {
  const { isAuth } = useAppSelector(AUTH_SELECTORS.selectAuthState);
  const [currentSchema, setCurrentSchema] = useColorSchema();
  const [showUserProfile, setShowUserProfile] = useState(false);
  const profileBtnRef = useRef<HTMLButtonElement>(null);

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
          <>
            <Button ref={profileBtnRef} role="icon" onClick={() => setShowUserProfile(true)}>
              <Icon extendedClass="text-4xl">account_circle</Icon>
            </Button>
            <OverlayHost
              targetRef={profileBtnRef}
              containerRef={profileBtnRef}
              show={showUserProfile}
              onHide={setShowUserProfile}
              offset={[0, 0]}
            >
              <Content message="Content in overlay" />
            </OverlayHost>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
