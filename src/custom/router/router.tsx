import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/index";
import Sandbox from "../pages/sandbox";

const PAGES_BY_LOCATION = {
  index: <IndexPage />,
  sandbox: <Sandbox />,
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/** index  */}
        <Route path="/" element={PAGES_BY_LOCATION.index} />
        {/** pages  */}
        <Route path="/sandbox" element={PAGES_BY_LOCATION.sandbox} />

        {/** 404  */}
        <Route path="*" element={PAGES_BY_LOCATION.index} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
