import { createBrowserRouter } from 'react-router-dom';
import { AllCollections } from './components/AllCollections/AllCollections';
import Layout from './components/Layout/Layout';
import { PublicCollectionDetails } from './components/PublicCollectionDetails/PublicCollectionDetails';
import NotFound from './components/NotFound/NotFound';
import OneQuestionDetails from './components/OneQuestionDetails/OneQuestionDetails';

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
      {
        path: '/collections/:collectionId/questions/:questionId',
        element: <OneQuestionDetails />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
