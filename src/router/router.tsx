import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { APP_PATHS } from './constants';

const PAGES_BY_LOCATION = {
  Home: React.lazy(() => import('../pages/home')),
  Sandbox: React.lazy(() => import('../pages/sandbox')),
  Usecases: React.lazy(() => import('../pages/usecases')),
  Concept: React.lazy(() => import('../pages/concept')),
  Docs: React.lazy(() => import('../pages/docs')),
  Links: React.lazy(() => import('../pages/links')),
};

const router = createHashRouter([
  // {
  //   path: APP_PATHS.sandbox.route,
  //   element: (
  //     <React.Suspense fallback={'Loading...'}>
  //       <PAGES_BY_LOCATION.Sandbox />
  //     </React.Suspense>
  //   ),
  // },
  {
    path: APP_PATHS.links.route,
    element: (
      <React.Suspense fallback={'Loading...'}>
        <PAGES_BY_LOCATION.Links />
      </React.Suspense>
    ),
  },
  {
    path: APP_PATHS.usecases.route,
    element: (
      <React.Suspense fallback={'Loading...'}>
        <PAGES_BY_LOCATION.Usecases />
      </React.Suspense>
    ),
  },
  {
    path: APP_PATHS.concept.route,
    element: (
      <React.Suspense fallback={'Loading...'}>
        <PAGES_BY_LOCATION.Concept />
      </React.Suspense>
    ),
  },
  {
    path: APP_PATHS.docs.route,
    element: (
      <React.Suspense fallback={'Loading...'}>
        <PAGES_BY_LOCATION.Docs />
      </React.Suspense>
    ),
  },
  {
    path: APP_PATHS.home.route,
    element: (
      <React.Suspense fallback={'Loading...'}>
        <PAGES_BY_LOCATION.Home />
      </React.Suspense>
    ),
  },
  {
    path: '/*',
    element: (
      <React.Suspense fallback={'Loading...'}>
        <h1>404</h1>
      </React.Suspense>
    ),
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
