import React from "react";
import "./custom/styles/index.scss";
import IndexPage from "./custom/pages";
import { useOmAppMountHook } from "./custom/hooks/useOmAppMountHook";

function App() {
  useOmAppMountHook();

  return <IndexPage />;
}

export default App;
