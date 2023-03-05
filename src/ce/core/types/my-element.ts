import {
    ContentConditionParams
} from "src/content-elements/content-element-templates/content-element-condition/content-element-condition";
import React from "react";

import { MY_ELEMENTS_BY_NAME } from "../constants/my-elements-by-name";

type MyElementTemplatePropsMap = typeof MY_ELEMENTS_BY_NAME;

/** START: MyElement */
export type MyElementName = keyof MyElementTemplatePropsMap;
export type MyElementTag<ElementName extends MyElementName> =
    keyof HTMLElementTagNameMap;
export type MyElementModifiers<ElementName extends MyElementName> = string[];

export type MyElementTemplateProps<ElementName extends MyElementName> = MyElementTemplatePropsMap[ElementName];

export type MyElementSpecialProps<ElementName extends MyElementName> = {
    myname: ElementName;
};
/** End: MyElement */

/** START: MyElementConfig */
type MyElementConfigBase<ElementName extends MyElementName> = Partial<{
    tag: MyElementTag<ElementName>;
    modifiers: Set<MyElementModifiers<ElementName>[number]> | null;
    content?: string
        | Array<string>
        | undefined
        | false
        | null
        | 0
        | MyElementConfig<ElementName>
}>;

export type MyElementConfig<ElementName extends MyElementName> =
    MyElementConfigBase<ElementName> &
    ContentConditionParams &
    MyElementSpecialProps<ElementName> & {};

export type MyElementConfigProps<ElementName extends MyElementName> =
    Omit<MyElementConfig<ElementName>, "myname" | "modifiers">
    & {
    modifiers?: MyElementModifiers<ElementName>;
};

interface MyElementConfigDefaultMap {
    text: string;
}

/** END: MyElementConfig */

/** START: MyElementProps */


// TODO FAQ: How to make one of props required: config by default value, or config with required attr by name, or
// children?
// Expected by error syntaxys: <CE.Text />
// Schema: Omit<AllProps, 'children' | 'config> & (
//  {children: React.ReactNode; config?: Config | DefaultConfig}
//  | {children?: React.ReactNode; config: Config | DefaultConfig}
// )
export type MyElementProps<ElementName extends MyElementName> =
    ContentConditionParams
    & Pick<MyElementConfigProps<ElementName>, 'modifiers' | 'tag'>
    & React.PropsWithChildren<{
    config?: MyElementConfigProps<ElementName> | MyElementConfigDefaultMap[ElementName];
}>;
/** END: MyElementProps */

