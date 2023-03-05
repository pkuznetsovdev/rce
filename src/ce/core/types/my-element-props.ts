/** START: MyElementProps */
import {
    ContentConditionParams
} from "src/content-elements/content-element-templates/content-element-condition/content-element-condition";
import React from "react";
import { MyElementName } from "./my-element";
import { MyElementConfig, MyElementConfigDefaultMap, MyElementConfigProps } from "./my-element-config";


// TODO FAQ: How to make one of props required: config by default value, or config with required attr by name, or
// children?
// Expected by error syntaxys: <CE.Text />
// Schema: Omit<AllProps, 'children' | 'config> & (
//  {children: React.ReactNode; config?: Config | DefaultConfig}
//  | {children?: React.ReactNode; config: Config | DefaultConfig}
// )
export type MyElementProps<ElementName extends MyElementName> =
    ContentConditionParams
    & Pick<MyElementConfig<ElementName>, 'modifiers' | 'tag'>
    & React.PropsWithChildren<{
    config?: MyElementConfigProps<ElementName> | MyElementConfigDefaultMap[ElementName];
}>;
/** END: MyElementProps */