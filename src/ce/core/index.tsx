import React from "react";
import {
  MyElementProps,
  MyElementName,
  MyElementConfig,
  MyElementTemplateProps,
  MyElementConfigDefaultMap,
} from "./types";
import {
  MY_ELEMENT_CONFIG_DEFAULT_VALUE_BY_NAME,
  MY_ELEMENTS_BY_NAME,
} from "./constants";
import { WithMyElementConfig } from "./with-my-element-config";
import { validateUnreachableCode } from "./utils";
import { useValidateMyElementProps } from "./hooks";

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
    MY_ELEMENT_CONFIG_DEFAULT_VALUE_BY_NAME[myname] === typeof props.config;

  if (isDefaultConfig) {
    return getConfigByDefaultValue(props, myname);
  }

  return getMyElementConfig(props, myname);
}

function getMyElementConfig<ElementName extends MyElementName>(
  props: MyElementProps<ElementName>,
  myname: ElementName,
  customProps: Partial<MyElementProps<ElementName>> = {}
): MyElementConfig<ElementName> {
  const { config, ...restProps } = props;

  const configToUse = config && typeof config !== "string" ? config : {};

  const modifiers = mergeModifiersInConfig(props, customProps);

  // TODO FAQ: How to fix ts
  // @ts-ignore
  return {
    ...restProps,
    ...configToUse,
    ...customProps,
    modifiers,
    myname,
  } as const;
}

function mergeModifiersInConfig<ElementName extends MyElementName>(
  props: MyElementProps<ElementName>,
  customProps: Partial<MyElementProps<ElementName>> = {}
) {
  return [
    // TODO FAQ: How to fix ts
    // @ts-ignore
    ...(props.config?.modifiers || []),
    ...(props.modifiers || []),
    ...(customProps.modifiers || []),
  ];
}

function getConfigByDefaultValue<ElementName extends MyElementName>(
  props: MyElementProps<ElementName>,
  myname: ElementName
): MyElementConfig<ElementName> {
  const { config } = props;
  switch (myname) {
    case "text":
      return getMyElementConfig(props, myname, {
        // TODO FAQ: How to fix ts
        // @ts-ignore
        text: config as MyElementConfigDefaultMap[ElementName],
      });
    case "image":
      return getMyElementConfig(props, myname, {
        // TODO FAQ: How to fix ts
        // @ts-ignore
        src: config as MyElementConfigDefaultMap[ElementName],
      });
    case "block":
      return getMyElementConfig(props, myname);
    default:
      validateUnreachableCode(myname);
      return getMyElementConfig(props, myname);
  }
}
