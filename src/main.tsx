import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.scss';
import router from './routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
