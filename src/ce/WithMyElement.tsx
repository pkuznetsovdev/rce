import React from "react";
import { MyElementConfig, MyElementName } from "./rce2";

export const WithMyElement =
  <
    ElementName extends MyElementName,
    ElementConfig extends MyElementConfig<ElementName>
  >(
    ElementTemplate: React.FC<ElementConfig>
  ) =>
  (myElementConfig: ElementConfig) => {
    //some magic with props
    const myElementTemplateProps = getMyElementTemplateProps(myElementConfig);

    return <ElementTemplate {...myElementTemplateProps} />;
  };

function getMyElementTemplateProps<
  ElementName extends MyElementName,
  Props extends MyElementConfig<ElementName>
>(props: Props) {
  return props;
}
