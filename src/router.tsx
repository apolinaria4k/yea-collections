import { createBrowserRouter } from 'react-router-dom';
import { AllCollections } from './components/AllCollections/AllCollections';
import Layout from './components/Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <AllCollections />,
      },
    ],
  },
]);
