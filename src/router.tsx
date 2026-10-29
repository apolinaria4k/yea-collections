import { createBrowserRouter } from 'react-router-dom';
import { AllCollections } from './components/AllCollections/AllCollections';
import Layout from './components/Layout/Layout';
import { PublicCollectionDetails } from './components/PublicCollectionDetails/PublicCollectionDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <AllCollections />,
      },
      {
        path: '/collections/:collectionId',
        element: <PublicCollectionDetails />,
      },
    ],
  },
]);
