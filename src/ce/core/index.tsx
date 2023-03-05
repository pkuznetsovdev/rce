import { useContentConditions } from "src/content-elements/content-element-templates/content-element-condition/content-element-condition";
import React from "react";
import {
  MyElementTemplateProps,
  MyElementName,
  MyElementConfig,
  MyElementConfigProps,
} from "./types";
import { WithMyElement } from "./with-my-element";
import { MY_ELEMENTS_BY_NAME } from "./constants";

export const getMyElementByNameRenderer = <ElementName extends MyElementName>(
  elementTemplatesByName?: Record<
    ElementName,
    React.FC<MyElementTemplateProps<ElementName>>
  >
) => {
  const elementTemplatesByNameWithDefaultValues = {
    ...MY_ELEMENTS_BY_NAME,
    ...elementTemplatesByName,
  };

  return (myname: ElementName) => {
    return (props: MyElementTemplateProps<ElementName>) => {
      const isMyElementPropsValid = useValidateMyElementProps(props, myname);

      if (!isMyElementPropsValid) {
        return null;
      }

      const MyElementTemplate = elementTemplatesByNameWithDefaultValues[
        myname
      ] as React.FC<MyElementConfig<ElementName>>;

      if (!MyElementTemplate) {
        return null;
      }

      const myElementConfig = getConfigByValidatedProps(props, myname);

      return WithMyElement(MyElementTemplate)(myElementConfig);
    };
  };
};

type MyElementRendererUtilsProps<ElementName extends MyElementName> = {
  props: MyElementTemplateProps<ElementName>;
  myname: ElementName;
};

/** @description Returns true if element is rendered after props validation */
function useValidateMyElementProps<
  ElementName extends MyElementName,
  MyElementRendererUtils extends MyElementRendererUtilsProps<ElementName>
>(
  props: MyElementRendererUtils["props"],
  myname: MyElementRendererUtils["myname"]
) {
  /** Case 1. Filter by WCE condition */
  const isElementValidByCondition = useContentConditions(
    props.contentConditions,
    { shouldSatisfyEveryCondition: props.shouldSatisfyEveryCondition }
  );

  if (!isElementValidByCondition) {
    /**  IDEAS
     * here we can track all invalid by content condition elements, f.e. Record<ElementName,
     * MyElementProps<ElementName>['contentConditions']> */
    return false;
  }

  /** Case 2. Filter by is minimum required content or children in props */
  const isChildrenInProps = Boolean(
    React.Children.toArray(props.children).length
  );

  const MY_ELEMENT_CONFGI_DEFAULT_VALUE_BY_NAME: Record<
    MyElementName,
    unknown
  > = {
    text: "string",
  } as const;

  let isContentInProps = false;

  function getConfigByDefaultValue<ElementName extends MyElementName>(
    props: MyElementTemplateProps<ElementName>,
    myname: ElementName
  ) {
    switch (myname) {
      case "text":
        return { content: props.config };
      // case "image":
      //     isContentInProps = Boolean(isChildrenInProps || props.src)
    }
  }

  function getContentFromProps<ElementName extends MyElementName>(
    props: MyElementTemplateProps<ElementName>,
    myname: ElementName
  ) {
    const isDefaultConfig =
      MY_ELEMENT_CONFGI_DEFAULT_VALUE_BY_NAME[myname] === typeof props.config;

    // if (isDefaultConfig) {
    //   return getConfigByDefaultValue(props, myname)
    // }

    return;
  }

  function getIsContentInProps<ElementName extends MyElementName>(
    props: MyElementTemplateProps<ElementName>,
    myname: ElementName
  ) {
    const isDefaultConfig =
      MY_ELEMENT_CONFGI_DEFAULT_VALUE_BY_NAME[myname] === typeof props.config;

    switch (myname) {
      case "text":
        // // TODO FAQ: How to fix ts: isDefaultConfig & myname is text -> typeof content is string?
        // @ts-ignore
        return Boolean(isDefaultConfig ? props.config : props.config?.content);
      // case "image":
      //     isContentInProps = Boolean(isChildrenInProps || props.src)
      default:
        return false;
    }
  }

  switch (myname) {
    case "text":
      isContentInProps =
        isChildrenInProps || getIsContentInProps(props, myname);
      break;
    // case "image":
    //     isContentInProps = Boolean(isChildrenInProps || props.src)
  }

  if (!isContentInProps) {
    /**  IDEAS
     * here we can track all empty elements (warn in console in dev mode for developer),
     * f.e. Record<ElementName, MyElementMessages<ElementName>['noContentInPropsMessage']> */
  }

  return isContentInProps;
}

function getConfigByValidatedProps<ElementName extends MyElementName>(
  props: MyElementTemplateProps<ElementName>,
  myname: ElementName
): MyElementConfig<ElementName> {
  const templateProps = {
    ...props,
    modifiers: props.modifiers ? new Set(props.modifiers) : null,
  } as const;

  return { ...templateProps, myname };
}
