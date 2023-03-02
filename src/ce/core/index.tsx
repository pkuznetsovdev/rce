import { useContentConditions } from "src/content-elements/content-element-templates/content-element-condition/content-element-condition";
import React from "react";
import { MyElementConfig, MyElementName } from "./types";
import { WithMyElement } from "./with-my-element";
import { MY_ELEMENTS_BY_NAME } from "./constants";

type MyElementProps<ElementName extends MyElementName> = Exclude<
  MyElementConfig<ElementName>,
  "myname"
>; //Exclude<MyElementConfig<ElementName>, MyElementSpecialProps<ElementName>>;

export const getMyElementByNameRenderer =
  <ElementName extends MyElementName>(
    elementTemplatesByName?: Record<
      ElementName,
      React.FC<MyElementProps<ElementName>>
    >
  ) =>
  (myname: ElementName) => {
    return (props: MyElementProps<ElementName>) => {
      const isMyElementPropsValid = useValidateMyElementProps(props, myname);

      if (!isMyElementPropsValid) {
        return null;
      }

      const elementTemplatesByNameWithDefaultValues = {
        ...MY_ELEMENTS_BY_NAME,
        ...elementTemplatesByName,
      };

      const MyElementTemplate = elementTemplatesByNameWithDefaultValues[
        myname
      ] as React.FC<MyElementConfig<ElementName>>;

      if (!MyElementTemplate) {
        return null;
      }

      return WithMyElement(MyElementTemplate)({ ...props, myname });
    };
  };

/** Returns true if element is rendered after props validation */
function useValidateMyElementProps<ElementName extends MyElementName>(
  props: MyElementProps<ElementName>,
  myname: ElementName
) {
  const isChildrenPassed = Boolean(
    React.Children.toArray(props.children).length
  );
  const isElementValidByCondition = useContentConditions(
    props.contentConditions,
    { shouldSatisfyEveryCondition: props.shouldSatisfyEveryCondition }
  );

  // console.log(myname);
  // console.log(isChildrenPassed);
  return [isChildrenPassed, isElementValidByCondition].some(Boolean);
}
