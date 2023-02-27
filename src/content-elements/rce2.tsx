import { ContentConditions } from "./content-element-templates/content-element-condition/utils";
import {
    ContentConditionParams,
} from "./content-element-templates/content-element-condition/content-element-condition";
import { TextProps } from "./content-element-templates";

export interface ElementTemplatePropsMap {
    text: MyElementConfigProps<'text'> & TextProps;
}

export type MyElementName = keyof ElementTemplatePropsMap;
export type MyElementTag<T> = string;
export type MyElementModifiers<T> = string;

export type MyElementSpecialProps<ElementName extends MyElementName> = {
    myname: ElementName;
}

type MyElementConfigProps<ElementName extends MyElementName> = {
    tag: MyElementTag<ElementName>
    modifiers: MyElementModifiers<ElementName>;
    content: string | Array<string> | undefined | false | null | 0 | MyElementConfig<MyElementName>;
    //
    contentConditions: ContentConditions;
} & ContentConditionParams & MyElementSpecialProps<ElementName>;


export type MyElementConfig<ElementName extends MyElementName> = ElementTemplatePropsMap[ElementName] & MyElementConfigProps<ElementName>;