import React from "react";
import "./custom/styles/index.scss";
import { useOmAppMountHook } from "./custom/hooks/useOmAppMountHook";
import Router from "./custom/router/router";

function App() {
  useOmAppMountHook();

  return <Router />;
}

export default App;
