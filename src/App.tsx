import { FC } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header/Header';

export const App: FC = () => {
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
