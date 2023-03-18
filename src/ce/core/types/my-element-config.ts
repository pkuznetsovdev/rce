import {
    ContentConditionParams
} from "src/content-elements/content-element-templates/content-element-condition/content-element-condition";
import { MyElementModifiers, MyElementName, MyElementSpecialProps, MyElementTag } from "./my-element";
import React, { HTMLProps } from "react";
import { ListProps } from "src/ce/core/templates/list/types";


/** START: MyElementConfig */
type MyElementConfigBase<ElementName extends MyElementName> = Partial<{
    tag: MyElementTag<ElementName>;
    modifiers: MyElementModifiers<ElementName>;
}>;


interface MyElementCofigContentMap<ElementName extends MyElementName, ListElementTemplateProps extends Record<string, unknown> = {}> {
    text: React.PropsWithChildren<{
        text?: string | Array<string> | false | null | 0 | MyElementConfig<ElementName>
    }>,
    image: {
        src: string;
    }
    block: never;
    list: ListProps<ListElementTemplateProps>;
}

type MyElementCofigContent<ElementName extends MyElementName> = MyElementCofigContentMap<ElementName>[ElementName]

export type MyElementConfig<ElementName extends MyElementName> =
    HTMLProps<any> &
    MyElementConfigBase<ElementName> &
    MyElementCofigContent<ElementName> &
    ContentConditionParams &
    MyElementSpecialProps<ElementName>;

export type MyElementConfigProps<ElementName extends MyElementName> =
    Omit<MyElementConfig<ElementName>, "myname">;

export interface MyElementConfigDefaultMap {
    text?: string;
    image?: string;
    block?: never;
    list?: never;
}

/** END: MyElementConfig */