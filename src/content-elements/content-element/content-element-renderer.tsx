import React from 'react';
import {
  ContentElementProps,
  ContentElementName,
  ContentElementRendererProps,
} from './types';
import { getContentElementTemplateByName } from './utils';
import { WithContentElementTemplateProps } from './hoc';

export const ContentElementRenderer = <Name extends ContentElementName>({
  name,
  ...contentElementProps
}: React.PropsWithChildren<
  ContentElementProps<Name> & ContentElementRendererProps<Name>
>) => {
  const ContentElementTemplate = getContentElementTemplateByName(name);

  return WithContentElementTemplateProps(ContentElementTemplate)(
    name,
    // TODO: WTF?
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line
    contentElementProps
  );
};
