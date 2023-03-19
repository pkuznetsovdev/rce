import React, { useContext } from "react";
import "./custom/project-a/styles/index.scss";
import Router from "./custom/project-a/router/router";
import { CustomProviders } from "src/custom";

function App() {
  return (
    <CustomProviders.AppProvider>
      <Router />
    </CustomProviders.AppProvider>
  );
}

export default App;
