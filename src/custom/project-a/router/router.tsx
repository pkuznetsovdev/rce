import React from "react";
import { BrowserRouter, Routes, Route, Navigate,
    createHashRouter,
    RouterProvider
} from "react-router-dom";

const PAGES_BY_LOCATION = {
  index: React.lazy(() => import("../pages")),
  sandbox: React.lazy(() => import("../pages/sandbox")),
  usecases: React.lazy(() => import("../pages/usecases")),
};

const router = createHashRouter([
    {
        path: "sandbox",
        element: (
            <React.Suspense fallback={"Loading..."}>
                <PAGES_BY_LOCATION.sandbox />
            </React.Suspense>
        ),
    },
    {
        path: "usecases",
        element: (
            <React.Suspense fallback={"Loading..."}>
                <PAGES_BY_LOCATION.usecases />
            </React.Suspense>
        ),
    },
    {
        path: "/",
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
    return (
        <RouterProvider router={router} />
    )
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
