import React from "react";
import { MyElementConfig, MyElementName, MyElementTemplateProps } from "./rce2";

export const WithMyElement =
  <
    ElementName extends MyElementName,
    ElementConfig extends MyElementConfig<ElementName>,
    ElementProps extends MyElementTemplateProps<ElementName>,
  >(
    ElementTemplate: React.FC<ElementProps>
  ) =>
  (myElementConfig: ElementConfig) => {
    //some magic with props
    const myElementTemplateProps = getMyElementTemplateProps(myElementConfig);

    // TODO: WTF MyElementTemplateProps<ElementName>
    // @ts-ignore
    return <ElementTemplate {...myElementTemplateProps} />;
  };

function getMyElementTemplateProps<
  ElementName extends MyElementName,
    ElementConfig extends MyElementConfig<ElementName>,
    ElementProps extends MyElementTemplateProps<ElementName>,
>(props: ElementConfig): ElementProps  {

  // TODO: WTF MyElementTemplateProps<ElementName>
  // @ts-ignore
  return props;
}
