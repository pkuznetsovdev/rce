import { useContentConditions } from "src/content-elements/content-element-templates/content-element-condition/content-element-condition";
import React from "react";
import {
  MyElementProps,
  MyElementName,
  MyElementConfig,
  MyElementTemplateProps,
  MyElementConfigDefaultMap,
} from "./types";
import { MY_ELEMENTS_BY_NAME } from "./constants";
import { WithMyElementConfig } from "./with-my-element-config";

const MY_ELEMENT_CONFGI_DEFAULT_VALUE_BY_NAME: Record<MyElementName, unknown> =
  {
    text: "string",
  } as const;

let isContentInProps = false;

export const getMyElementByNameRenderer = <ElementName extends MyElementName>(
  elementTemplatesByName?: Record<
    ElementName,
    React.FC<MyElementProps<ElementName>>
  >
) => {
  const elementTemplatesByNameWithDefaultValues = {
    ...MY_ELEMENTS_BY_NAME,
    ...elementTemplatesByName,
  };

  return (myname: ElementName) => {
    return (props: MyElementProps<ElementName>) => {
      const isMyElementPropsValid = useValidateMyElementProps(props, myname);

      if (!isMyElementPropsValid) {
        return null;
      }

      const MyElementTemplate = elementTemplatesByNameWithDefaultValues[
        myname
      ] as React.FC<MyElementTemplateProps<ElementName>>;

      if (!MyElementTemplate) {
        return null;
      }

      const myElementConfig = getConfigByValidatedProps(props, myname);

      return WithMyElementConfig(MyElementTemplate)(myElementConfig);
    };
  };
};

type MyElementRendererUtilsProps<ElementName extends MyElementName> = {
  props: MyElementProps<ElementName>;
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

  function getIsContentInProps<ElementName extends MyElementName>(
    props: MyElementProps<ElementName>,
    myname: ElementName
  ) {
    const isDefaultConfig =
      MY_ELEMENT_CONFGI_DEFAULT_VALUE_BY_NAME[myname] === typeof props.config;

    switch (myname) {
      case "text":
        // // TODO FAQ: How to fix ts: isDefaultConfig & myname is text -> typeof content is string?
        // @ts-ignore
        return Boolean(isDefaultConfig ? props.config : props.config?.text);
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
  props: MyElementProps<ElementName>,
  myname: ElementName
): MyElementConfig<ElementName> {
  return getMyElementConfigFromProps(props, myname);
}

function getMyElementConfigFromProps<ElementName extends MyElementName>(
  props: MyElementProps<ElementName>,
  myname: ElementName
) {
  const isDefaultConfig =
    MY_ELEMENT_CONFGI_DEFAULT_VALUE_BY_NAME[myname] === typeof props.config;

  if (isDefaultConfig) {
    return getConfigByDefaultValue(props, myname);
  }

  return getMyElementConfig(props, myname);
}

function getMyElementConfig<ElementName extends MyElementName>(
  props: MyElementProps<ElementName>,
  myname: ElementName,
  customProps?: Partial<MyElementConfig<ElementName>>
): MyElementConfig<ElementName> {
  const { config, ...restProps } = props;

  const configToUse = config && typeof config !== "string" ? config : {};

  return {
    ...restProps,
    ...configToUse,
    ...(customProps || {}),
    myname,
  } as const;
}

function getConfigByDefaultValue<ElementName extends MyElementName>(
  props: MyElementProps<ElementName>,
  myname: ElementName
): MyElementConfig<ElementName> {
  switch (myname) {
    case "text":
      const { config } = props;
      // TODO FAQ: How to fix??
      return getMyElementConfig(props, myname, { text: config });
    default:
      return getMyElementConfig(props, myname);
  }
}
