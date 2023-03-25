import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { APP_PATHS } from "./constants";

const PAGES_BY_LOCATION = {
  index: React.lazy(() => import("../pages/index")),
  sandbox: React.lazy(() => import("../pages/sandbox")),
  usecases: React.lazy(() => import("../pages/usecases")),
  concept: React.lazy(() => import("../pages/concept")),
  docs: React.lazy(() => import("../pages/docs")),
};

const router = createHashRouter([
  {
    path: APP_PATHS.sandbox.route,
    element: (
      <React.Suspense fallback={"Loading..."}>
        <PAGES_BY_LOCATION.sandbox />
      </React.Suspense>
    ),
  },
  {
    path: APP_PATHS.usecases.route,
    element: (
      <React.Suspense fallback={"Loading..."}>
        <PAGES_BY_LOCATION.usecases />
      </React.Suspense>
    ),
  },
  {
    path: APP_PATHS.concept.route,
    element: (
      <React.Suspense fallback={"Loading..."}>
        <PAGES_BY_LOCATION.concept />
      </React.Suspense>
    ),
  },
  {
    path: APP_PATHS.docs.route,
    element: (
      <React.Suspense fallback={"Loading..."}>
        <PAGES_BY_LOCATION.docs />
      </React.Suspense>
    ),
  },
  {
    path: APP_PATHS.home.route,
    element: (
      <React.Suspense fallback={"Loading..."}>
        <PAGES_BY_LOCATION.index />
      </React.Suspense>
    ),
  },
  {
    path: "/*",
    element: (
      <React.Suspense fallback={"Loading..."}>
        <h1>404</h1>
      </React.Suspense>
    ),
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       {/** pages  */}
  //       <Route
  //         path="sandbox"
  //         element={
  //           <React.Suspense fallback={"Loading..."}>
  //             <PAGES_BY_LOCATION.sandbox />
  //           </React.Suspense>
  //         }
  //       />
  //       <Route
  //         path="usecases"
  //         element={
  //           <React.Suspense fallback={"Loading..."}>
  //             <PAGES_BY_LOCATION.usecases />
  //           </React.Suspense>
  //         }
  //       />
  //       {/** index  */}
  //       <Route
  //         path="/"
  //         element={
  //           <React.Suspense fallback={"Loading..."}>
  //             <PAGES_BY_LOCATION.index />
  //           </React.Suspense>
  //         }
  //       />
  //       {/** 404  */}
  //       <Route
  //         path="*"
  //         element={
  //           <React.Suspense fallback={"Loading..."}>
  //             <h1>404</h1>
  //           </React.Suspense>
  //         }
  //       />
  //     </Routes>
  //   </BrowserRouter>
  // );
};

export default Router;
