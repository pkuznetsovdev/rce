import {
    ContentConditionParams
} from "src/content-elements/content-element-templates/content-element-condition/content-element-condition";
import { MyElementModifiers, MyElementName, MyElementSpecialProps, MyElementTag } from "./my-element";


/** START: MyElementConfig */
type MyElementConfigBase<ElementName extends MyElementName> = Partial<{
    tag: MyElementTag<ElementName>;
    modifiers: MyElementModifiers<ElementName>;
}>;


interface MyElementCofigContentMap<ElementName extends MyElementName> {
    text: {
        text?: string | Array<string> | false | null | 0 | MyElementConfig<ElementName>
    }
}

type MyElementCofigContent<ElementName extends MyElementName> = MyElementCofigContentMap<ElementName>[ElementName]

export type MyElementConfig<ElementName extends MyElementName> =
    MyElementConfigBase<ElementName> &
    MyElementCofigContent<ElementName> &
    ContentConditionParams &
    MyElementSpecialProps<ElementName>;

export type MyElementConfigProps<ElementName extends MyElementName> =
    Omit<MyElementConfig<ElementName>, "myname" | "modifiers">;

export interface MyElementConfigDefaultMap {
    text?: string;
}

/** END: MyElementConfig */