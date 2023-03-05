import {
  MyElementConfig,
  MyElementName,
  MyElementTemplateProps,
  MyElementModifiers,
} from "../types";
import { BASE_CLASSNAME } from "../constants";

export function getMyElementTemplatePropsByConfig<
  ElementName extends MyElementName,
  ElementConfig extends MyElementConfig<ElementName>
>(config: ElementConfig) {
  const myElementClassName = getMyElementClassName(config);

  const { modifiers, myname, ...nativeProps } = config;

  return {
    ...nativeProps,
    className: myElementClassName,
  } as unknown as MyElementTemplateProps<ElementName>;
}

function getClassNameByModifier<ElementName extends MyElementName>(
  modifier: MyElementModifiers<ElementName>[number]
) {
  return `${BASE_CLASSNAME}--${modifier}`;
}

function getMyElementClassName<ElementName extends MyElementName>(
  config: MyElementConfig<ElementName>
) {
  const classNameByMyName = `${BASE_CLASSNAME}-${config.myname}`;
  const classNameByModifiers = (config.modifiers ? config.modifiers : []).map(
    getClassNameByModifier
  );

  return [BASE_CLASSNAME, classNameByMyName, ...classNameByModifiers].join(" ");
}
