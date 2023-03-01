import { useContentConditions } from "../content-elements/content-element-templates/content-element-condition/content-element-condition";
import React from "react";
import { MyElementConfig, MyElementName } from "./rce2";
import { MY_ELEMENTS_BY_NAME } from "./rceConstants";

export const MyElementRenderer = <ElementName extends MyElementName>(
  myElementProps: MyElementConfig<ElementName>
) => {
  const MyElement = MY_ELEMENTS_BY_NAME[myElementProps.myname] as React.FC<
    MyElementConfig<ElementName>
  >;

  if (!MyElement) {
    return null;
  }

  return <MyElement {...myElementProps} />;
};

type MyElementProps<ElementName extends MyElementName> = Omit<
  MyElementConfig<ElementName>,
  "myname"
>; //Exclude<MyElementConfig<ElementName>, MyElementSpecialProps<ElementName>>;

export function getMyElementByName<ElementName extends MyElementName>(
  myname: ElementName
) {
  return (props: MyElementProps<ElementName>) => {
    const isMyElementPropsValid = useValidateMyElementProps(props, myname);

    if (!isMyElementPropsValid) {
      return null;
    }

    return MyElementRenderer({ ...props, myname });
  };
}

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
