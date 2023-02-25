import React from "react";
import { ContentElementName, ContentElementProps, ContentElementRendererProps } from "../content-element/types";

export function getContentElementConfig<Name extends ContentElementName>(
  elementType: Name,
  configByName: Omit<React.PropsWithChildren<
    ContentElementProps<Name> & ContentElementRendererProps<Name>
    >, 'name' | 'tag' | 'modifiers'>,
) {
  if (typeof configByName === 'string') {
    return getCustomElementPropsByDefaultValue(configByName, elementType);
  }

  return configByName;
}

function getCustomElementPropsByDefaultValue<ElementType extends ContentElementName>(
  defaultValue: string,
  elementType: ElementType,
) {
  if (elementType === 'image') {
    return { src: defaultValue };
  }

  return { rawContent: defaultValue };
}