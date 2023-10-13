import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from '@pages/Home/Home';
import LoginPage from '@pages/Login/Login';
import SignupPage from '@pages/Signup/Signup';
import { ROUTES } from '@enums/routes.enum';
import AuthGuard from '@components/AuthGuard/AuthGuard';
import ResetPassword from '@pages/ResetPassword/ResetPassword';
import NewPassword from '@pages/NewPassword/NewPassword';

type Router = ReturnType<typeof createBrowserRouter>;

const router: Router = createBrowserRouter([
  {
    path: ROUTES.INDEX,
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <AuthGuard>
            <HomePage />
          </AuthGuard>
        ),
      },
      {
        path: ROUTES.LOGIN,
        element: (
          <AuthGuard inverse={true}>
            <LoginPage />
          </AuthGuard>
        ),
      },
      {
        path: ROUTES.SIGNUP,
        element: (
          <AuthGuard inverse={true}>
            <SignupPage />
          </AuthGuard>
        ),
      },
      {
        path: ROUTES.RESET,
        element: <ResetPassword />,
      },
      {
        path: `${ROUTES.NEW_PASSWORD}/:resetToken/:uid`,
        element: <NewPassword />,
      },
    ],
  },
]);

export default router;
