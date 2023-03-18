import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PAGES_BY_LOCATION = {
  index: React.lazy(() => import("../pages")),
  sandbox: React.lazy(() => import("../pages/sandbox")),
  usecases: React.lazy(() => import("../pages/usecases")),
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/** index  */}
        <Route
          path="/"
          element={
            <React.Suspense fallback={"Loading..."}>
              <PAGES_BY_LOCATION.index />
            </React.Suspense>
          }
        />
        {/** pages  */}
        <Route
          path="sandbox"
          element={
            <React.Suspense fallback={"Loading..."}>
              <PAGES_BY_LOCATION.sandbox />
            </React.Suspense>
          }
        />
        <Route
          path="usecases"
          element={
            <React.Suspense fallback={"Loading..."}>
              <PAGES_BY_LOCATION.usecases />
            </React.Suspense>
          }
        />

        {/** 404  */}
        <Route
          path="*"
          element={
            <React.Suspense fallback={"Loading..."}>
              <h1>404</h1>
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
