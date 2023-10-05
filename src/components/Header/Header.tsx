import { FC } from 'react';

import './Header.scss';
import useColorSchema from '@hooks/use-color-schema';
import { ColorSchema } from '@models/color-shema.type';
import { Icon } from '@components/UI';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@enums/routes.enum';

const Header: FC = () => {
  const [currentSchema, setCurrentSchema] = useColorSchema();
  const navigate = useNavigate();

  const changeModeHandler = (schema: ColorSchema): void => setCurrentSchema(schema);
  const navigateHanlder = (path: ROUTES) => navigate(path);

  return (
    <header className="header container">
      <div className="header__logo" onClick={() => navigateHanlder(ROUTES.INDEX)}>
        <img className="header__logo-img" src="src/assets/icons/logo.svg" alt="logo" />
      </div>
      <div className="header__actions">
        {currentSchema === 'dark' ? (
          <Icon onClick={() => changeModeHandler('light')} extendedClass="text-white">
            dark_mode
          </Icon>
        ) : (
          <Icon onClick={() => changeModeHandler('dark')} extendedClass="text-gray-500">
            light_mode
          </Icon>
        )}
      </div>
    </header>
  );
};

export default Header;
