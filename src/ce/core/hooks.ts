import { MyElementName, MyElementProps } from "./types";
import {
    useContentConditions
} from "../../content-elements/content-element-templates/content-element-condition/content-element-condition";
import React from "react";
import { validateUnreachableCode } from "./utils/validateUnreachableCode";
import { MY_ELEMENT_CONFIG_DEFAULT_VALUE_BY_NAME } from "./constants";

/** @description Returns true if element is rendered after props validation */
export function useValidateMyElementProps<ElementName extends MyElementName>(
    props: MyElementProps<ElementName>,
    myname: ElementName
) {
    /** Case 1. Filter by WCE condition */
    const isElementValidByCondition = useContentConditions(
        props.contentConditions,
        {shouldSatisfyEveryCondition: props.shouldSatisfyEveryCondition}
    );

    if (!isElementValidByCondition) {
        /**  IDEAS
         * here we can track all invalid by content condition elements, f.e. Record<ElementName,
         * MyElementProps<ElementName>['contentConditions']> */
        return false;
    }

    /** Case 2. Filter by 'is minimum required content' or children in props or else... */
    const isContentInProps = getIsContentInProps(props, myname);

    if (!isContentInProps) {
        /**  IDEAS
         * here we can track all empty elements (warn in console in dev mode for developer),
         * f.e. Record<ElementName, MyElementMessages<ElementName>['noContentInPropsMessage']> */
    }

    return isContentInProps;
}

function getIsContentInProps<ElementName extends MyElementName>(
    props: MyElementProps<ElementName>,
    myname: ElementName,
) {
    const isChildrenInProps = Boolean(
        React.Children.toArray(props.children).length
    );

    const isDefaultConfig =
        MY_ELEMENT_CONFIG_DEFAULT_VALUE_BY_NAME[myname] === typeof props.config;

    if (isDefaultConfig) {
        return Boolean(props.config)
    }

    switch (myname) {
        case "text":
            return isChildrenInProps || Boolean(
                // TODO FAQ: How to fix ts: isDefaultConfig & myname is text -> typeof content is stringc
                // @ts-ignore
                props.config?.text || props.text
            );
        case "image":
            // TODO FAQ: How to fix ts
            // @ts-ignore
            return props.config?.src || props.src
        case "block":
            return true;
        case "list":
            // TODO FAQ: How to fix ts
            // @ts-ignore
            return props.listItemTemplate || props.config?.listItemTemplate || isChildrenInProps
        default:
            validateUnreachableCode(myname)
            return false;
    }
}