import React from 'react';
import {
  ContentElementProps,
  ContentElementName,
  ContentElementRendererProps,
} from './types';
import { getContentElementTemplateByName } from './utils';
import { WithContentElementTemplateProps } from './hoc';
import { getContentElementConfig } from "../core/getContentElementConfig";

export const ContentElementRenderer = <Name extends ContentElementName>({
  name,
  ...contentElementProps
}: React.PropsWithChildren<
  ContentElementProps<Name> & ContentElementRendererProps<Name>
>) => {
  // @ts-ignore
  const configByName = (contentElementProps[name] ? contentElementProps[name] : contentElementProps) as typeof contentElementProps;

  const contentElementConfig = getContentElementConfig(name, configByName);

  const ContentElementTemplate = getContentElementTemplateByName(name);

  return WithContentElementTemplateProps(ContentElementTemplate)(
    name,
    // TODO: WTF?
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line
    contentElementConfig
  );
};
