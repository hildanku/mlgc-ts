import Layout from '@/components/layouts/layout';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home-page';
import PredictPage from '../pages/predict-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout children={undefined} />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/predict',
        element: <PredictPage />,
      },
    ],
  },
]);

export default router;

