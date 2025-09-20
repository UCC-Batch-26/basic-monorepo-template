import { createBrowserRouter, RouterProvider } from 'react-router';
import { HomePage } from '@/modules/home/pages/home-page';
import { SampleLayout } from '@/modules/sample/layouts/sample-layout';
import { SampleIndexPage } from '@/modules/sample/pages/sample-index-page';
import { SampleAddPage } from '@/modules/sample/pages/sample-add-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    index: true,
  },
  {
    path: '/sample',
    element: <SampleLayout />,
    children: [
      {
        path: '',
        index: true,
        element: <SampleIndexPage />,
      },
      {
        path: 'add',
        element: <SampleAddPage />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
