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
  return (name: Name, contentElementConfig: ContentElementProps<Name>) => {
    // extract content element config props(f.e. 'modifiers')
    const { modifiers, ...restContentElementProps } = contentElementConfig;

    const contentElementTemplateProps = {
      ...restContentElementProps,
      tag: getContentElementTag(name, {
        contentElementProps: contentElementConfig,
      }),
      className: getContentElementClassName(name, {
        contentElementProps: contentElementConfig,
      }),
    };

    // TODO: REFACTOR
    if (name === 'list' || name ==='ceList') {
      // @ts-ignore-next-line
      contentElementTemplateProps['listItem'] = {
        // @ts-ignore-next-line
        className: getBaseContentElementClassName('list-item'),
      };
    }
    if (contentElementConfig?.className === 'option-card-list') {
      console.log(contentElementConfig)
    }

    // // TODO FAQ: How to render content depending on children or raw content is passed?
    // // TODO: A CRITICAL BUG, TWO sources of props for the element/content to render
    // const rawContentToRender = getContentElementRawContent(name, {
    //   contentElementProps: contentElementConfig,
    // });
    //
    // if (contentElementConfig.rawContent) {
    //   const {children, rawContent, ...rawContentToRenderProps} = contentElementTemplateProps;
    //   // TODO: WTF??
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore-next-line
    //   <ContentElementTemplate {...rawContentToRenderProps} dangerouslySetInnerHTML={{ __html: rawContent }} />
    // }

    return (
      // TODO: WTF??
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      <ContentElementTemplate {...contentElementTemplateProps} />
    );
  };
}
