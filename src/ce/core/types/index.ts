import { ContentConditionParams } from "src/content-elements/content-element-templates/content-element-condition/content-element-condition";
import { TextProps } from "src/content-elements/content-element-templates";
import React from "react";

export interface ElementTemplatePropsMap {
    text: TextProps;
}

export type MyElementName = keyof ElementTemplatePropsMap;
export type MyElementTag<ElementName extends MyElementName> =
    keyof HTMLElementTagNameMap;
export type MyElementModifiers<ElementName extends MyElementName> = string[];

export type MyElementSpecialProps<ElementName extends MyElementName> = {
    myname: ElementName;
};

type WithContentOrChildren<T> = T &
    React.PropsWithChildren<{
        content?:
            | string
            | Array<string>
            | undefined
            | false
            | null
            | 0
            | MyElementConfig<MyElementName>;
    }>;

type MyElementConfigPropsBase<ElementName extends MyElementName> = Partial<{
    tag: MyElementTag<ElementName>;
    modifiers: MyElementModifiers<ElementName>;
}>;

type MyElementConfigProps<ElementName extends MyElementName> =
    WithContentOrChildren<
        MyElementConfigPropsBase<ElementName> &
        ContentConditionParams &
        MyElementSpecialProps<ElementName>
    >;

export type MyElementConfig<ElementName extends MyElementName> =
    ElementTemplatePropsMap[ElementName] & MyElementConfigProps<ElementName>;

// to fix
export type MyElementTemplateProps<ElementName extends MyElementName> =
    ElementTemplatePropsMap[ElementName] & MyElementConfigProps<ElementName>;
