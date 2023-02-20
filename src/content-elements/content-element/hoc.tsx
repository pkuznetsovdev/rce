import React from 'react';
import {
  ContentElementProps,
  ContentElementTemplatesMap,
  ContentElementName,
} from './types';
import {
  getContentElementTag,
  getContentElementClassName,
  getContentElementRawContent,
  getBaseContentElementClassName,
} from './utils';

export function WithContentElementTemplateProps<
  Name extends ContentElementName
>(ContentElementTemplate: ContentElementTemplatesMap<Name>) {
  return (name: Name, contentElementProps: ContentElementProps<Name>) => {
    // extract content element config props(f.e. 'modifiers')
    const { modifiers, ...restContentElementProps } = contentElementProps;

    const contentElementTemplateProps = {
      ...restContentElementProps,
      tag: getContentElementTag(name, {
        contentElementProps,
      }),
      className: getContentElementClassName(name, {
        contentElementProps,
      }),
    };

    // TODO: REFACTOR
    if (name === 'list') {
      // @ts-ignore-next-line
      contentElementTemplateProps['listItem'] = {
        // @ts-ignore-next-line
        className: getBaseContentElementClassName('list-item'),
      };
    }

    // TODO: A CRITICAL BUG, TWO sources of props for the element/content to render
    const rawContentToRender = getContentElementRawContent(name, {
      contentElementProps,
    });

    if (rawContentToRender) {
      return <>{rawContentToRender}</>;
    }
    console.log(contentElementTemplateProps)
    return (
      // TODO: WTF??
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      <ContentElementTemplate {...contentElementTemplateProps} />
    );
  };
}
