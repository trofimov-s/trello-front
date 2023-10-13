import { FC, useState } from 'react';
import './Home.scss';
import UserApi from '@utils/api/user-api';
import { useAppDispatch } from '@store/index';
import AUTH_ACTIONS from '@store/auth/auth.actions';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<{ a: string }>(null);

  const test = async () => {
    const res = await UserApi.test();
    setData(res);
  };

  const logoutHanlder = () => {
    dispatch(AUTH_ACTIONS.logoutAsync());
  };

  return (
    <div>
      <span>{data ? data.a : 'no data'}</span>
      <button onClick={test}>Fetch Data</button>
      <button onClick={logoutHanlder}>Logout</button>
    </div>
  );
};

export default HomePage;
