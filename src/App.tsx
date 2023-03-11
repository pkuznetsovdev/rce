import React, { useContext } from "react";
import "./custom/styles/index.scss";
import Router from "./custom/router/router";
import { CustomProviders } from "src/custom";

function App() {
  return (
    <CustomProviders.AppProvider>
      <Router />
    </CustomProviders.AppProvider>
  );
}

export default App;
