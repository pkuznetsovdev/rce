import React from 'react';
import { ContentElementProps, ContentElementName, ContentElementRendererProps } from './types';
import { getContentElementTemplateByName } from './utils';
import { WithContentElementTemplateProps } from './hoc';
import { getContentElementConfig } from '../core/getContentElementConfig';

const getConfigByName = <Name extends ContentElementName>(
  name: Name,
  contentElementProps: Omit<
    React.PropsWithChildren<ContentElementProps<Name> & ContentElementRendererProps<Name>>,
    'name' | 'tag' | 'modifiers'
  >,
  {
    modifiers,
    tag,
  }: Pick<React.PropsWithChildren<ContentElementProps<Name> & ContentElementRendererProps<Name>>, 'modifiers' | 'tag'>,
) => {
  // @ts-ignore
  const contentElementPropsByName = contentElementProps[name]
    ? // @ts-ignore
      contentElementProps[name]
    : contentElementProps;
  const processedContentElementProps = getContentElementConfig(name, contentElementPropsByName);

  const mergedModifiers = [
    ...(modifiers || []),
    // @ts-ignore
    ...(processedContentElementProps?.modifiers || []),
  ].filter(Boolean);
  // @ts-ignore
  const tagByProps = processedContentElementProps.tag || tag;

  return {
    ...processedContentElementProps,
    tag: tagByProps,
    modifiers: mergedModifiers,
  };
};

export const ContentElementRenderer = <Name extends ContentElementName>({
  name,
  tag,
  modifiers,
  ...contentElementProps
}: React.PropsWithChildren<ContentElementProps<Name> & ContentElementRendererProps<Name>>) => {
  // @ts-ignore
  // if (!contentElementProps || !contentElementProps[name]) {
  //   return null
  // }
  // TODO WTF
  // @ts-ignore
  const contentElementConfig = getConfigByName(name, contentElementProps, {
    modifiers,
    tag,
  });

  const ContentElementTemplate = getContentElementTemplateByName(name);

  return WithContentElementTemplateProps(ContentElementTemplate)(
    name,
    // TODO: WTF?
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line
    contentElementConfig,
  );
};
