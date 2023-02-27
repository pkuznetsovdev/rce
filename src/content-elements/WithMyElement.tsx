import React from "react";
import { MyElementConfig, MyElementName } from "./rce2";

export const WithMyElement = <ElementName extends MyElementName, Props = MyElementConfig<ElementName>>(
    ElementTemplate: React.FC<Props>
) => (
    props: Props
) => {

    return <ElementTemplate {...props} />
};