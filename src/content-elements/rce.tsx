import {
    useContentConditions
} from "./content-element-templates/content-element-condition/content-element-condition";
import React from "react";
import {
    ElementTemplatePropsMap,
    MyElementConfig,
    MyElementName,
} from "./rce2";
import { MY_ELEMENTS_BY_NAME } from "./rceConstants";

export const MyElementRenderer = <ElementName extends MyElementName>(myElementProps: MyElementConfig<ElementName>) => {
    const MyElement = MY_ELEMENTS_BY_NAME[myElementProps.myname] as unknown as React.FC<ElementTemplatePropsMap[ElementName]>;

    if (!MyElement) {
        return null;
    }

    return <MyElement {...myElementProps} />
};

type MyElementProps<ElementName extends MyElementName> = MyElementConfig<ElementName>;

export function getMyElementByName<ElementName extends MyElementName>(myname: ElementName) {
    return (props: MyElementProps<ElementName>) => {
        const isMyElementProps = useValidateMyElementProps(props);

        if (!isMyElementProps) {
            return null;
        }

        return MyElementRenderer({ ...props, myname});
    };
}

function useValidateMyElementProps<ElementName extends MyElementName>(props: MyElementProps<ElementName>) {
    const isChildrenPassed = Boolean(React.Children.toArray(props.children).length);
    const isElementValidByCondition = useContentConditions(props.contentConditions,
        {shouldSatisfyEveryCondition: props.shouldSatisfyEveryCondition});

    if ([isChildrenPassed, isElementValidByCondition].some(Boolean)) {
        return null;
    }
}
