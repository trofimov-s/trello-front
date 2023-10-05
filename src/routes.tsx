import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from '@pages/Home';
import LoginPage from '@pages/Login/Login';
import SignupPage from '@pages/Signup/Signup';
import { ROUTES } from '@enums/routes.enum';

type Router = ReturnType<typeof createBrowserRouter>;

const router: Router = createBrowserRouter([
  {
    path: ROUTES.INDEX,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.SIGNUP,
        element: <SignupPage />,
      },
    ],
  },
]);

export default router;
