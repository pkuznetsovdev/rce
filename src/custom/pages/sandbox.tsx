import React from "react";
import { ContentElements } from "src/content-elements";

import { useGetData } from "src/custom/data";

const Sandbox = () => {
  const pageData = useGetData("IndexPage");
  return (
    <ContentElements.Page>
      {/*<ContentElements.Text modifiers={["header"]}>
        Sandbox
      </ContentElements.Text>*/}
      <iframe
        src="https://codesandbox.io/embed/dazzling-kowalevski-bvolky?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: "100%",
          height: "100%",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="rce-sandbox"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </ContentElements.Page>
  );
};

export default Sandbox;
