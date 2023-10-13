import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.scss';
import router from './routes.tsx';
import { Provider } from 'react-redux';
import store from '@store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
