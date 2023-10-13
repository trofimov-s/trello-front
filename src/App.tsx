import { FC, useEffect } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header/Header';
import { useAppDispatch } from './store';
import AUTH_ACTIONS from '@store/auth/auth.actions';
import LocalStorageHelper from '@utils/local-storage-helper';
import { LocalStorageKeys } from '@enums/local-storage-keys.enum';

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (LocalStorageHelper.getItem(LocalStorageKeys.Token)) {
      dispatch(AUTH_ACTIONS.forceAuthAsync());
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="main container">
        <Outlet />
      </main>
    </>
  );
};

export default App;
