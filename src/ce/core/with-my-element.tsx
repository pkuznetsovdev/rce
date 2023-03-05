import React from "react";
import { MyElementConfig, MyElementName } from "./types";

export const WithMyElement =
  <
    ElementName extends MyElementName,
    ElementConfig extends MyElementConfig<ElementName>
  >(
    ElementTemplate: React.FC<ElementConfig>
  ) =>
  (myElementConfig: ElementConfig) => {
    //some magic with props
    const myElementTemplateProps =
      getMyElementTemplatePropsByConfig(myElementConfig);

    // TODO: WTF MyElementTemplateProps<ElementName>
    // @ts-ignore
    return <ElementTemplate {...myElementTemplateProps} />;
  };

function getMyElementTemplatePropsByConfig<
  ElementName extends MyElementName,
  ElementConfig extends MyElementConfig<ElementName>
>(props: ElementConfig): ElementConfig {
  // TODO: WTF MyElementTemplateProps<ElementName>
  // @ts-ignore
  return props;
}
