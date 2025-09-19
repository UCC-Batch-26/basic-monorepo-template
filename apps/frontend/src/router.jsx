import { createBrowserRouter, RouterProvider } from 'react-router';
import { LoginPage } from '@/modules/auth/pages/login-page';
import { HomePage } from '@/modules/home/pages/home-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    index: true,
  },
  {
    path: '/auth/login',
    element: <LoginPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
