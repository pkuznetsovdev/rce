import {
    ContentConditionParams
} from "src/content-elements/content-element-templates/content-element-condition/content-element-condition";
import React from "react";


export interface TextProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
}

export interface ElementTemplatePropsMap {
    text: TextProps;
}

/** START: MyElement */
export type MyElementName = keyof ElementTemplatePropsMap;
export type MyElementTag<ElementName extends MyElementName> =
    keyof HTMLElementTagNameMap;
export type MyElementModifiers<ElementName extends MyElementName> = string[];

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

/** START: MyElementTemplateProps */


// TODO FAQ: How to make one of props required: config by default value, or config with required attr by name, or
// children?
// Expected by error syntaxys: <CE.Text />
// Schema: Omit<AllProps, 'children' | 'config> & (
//  {children: React.ReactNode; config?: Config | DefaultConfig}
//  | {children?: React.ReactNode; config: Config | DefaultConfig}
// )
export type MyElementTemplateProps<ElementName extends MyElementName> =
    ContentConditionParams
    & Pick<MyElementConfigProps<ElementName>, 'modifiers' | 'tag'>
    & React.PropsWithChildren<{
    config?: MyElementConfigProps<ElementName> | MyElementConfigDefaultMap[ElementName];
}>;
/** END: MyElementTemplateProps */
