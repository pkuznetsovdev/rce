import React from "react";
import {
  MyElementConfig,
  MyElementName,
  MyElementTemplateProps,
} from "./types";
import { getMyElementTemplatePropsByConfig } from "./utils";

export const WithMyElementConfig =
  <
    ElementName extends MyElementName,
    ElementConfig extends MyElementConfig<ElementName>
  >(
    MyElementTemplate: React.FC<MyElementTemplateProps<ElementName>>
  ) =>
  (myElementConfig: ElementConfig) => {
    const myElementTemplateProps =
      getMyElementTemplatePropsByConfig(myElementConfig);

    //some magic with props

    // // TODO FAQ: How to fix?
    return <MyElementTemplate {...myElementTemplateProps} />;
  };
