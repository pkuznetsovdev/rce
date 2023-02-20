import { PropsWithChildren, HTMLProps } from 'react';
import { WithContentElementBaseModifier } from '../../types';
import { ContentElementImageProps } from '../content-element-image';
import { BreakpointName } from 'src/shared';

export const CONTENT_ELEMENT_BLOCK = {
  _elementName: 'block',
  _elementSettings: {
    DEFAULT_TAG: 'div',
  },
  types: ['banner', 'section', 'container', 'page'],
  tags: ['div', 'section', 'article'],
  modifiers: ['1'],
} as const;

export type ContentElementBlock = typeof CONTENT_ELEMENT_BLOCK;

export type backgroundImageProps = ContentElementImageProps &
  Partial<{
    srcSet: Record<BreakpointName, string>;
  }>;

export type ContentElementBlockProps = HTMLProps<
  typeof CONTENT_ELEMENT_BLOCK.tags[number]
> &
  PropsWithChildren<{
    type: typeof CONTENT_ELEMENT_BLOCK.types[number];
    tag: typeof CONTENT_ELEMENT_BLOCK.tags[number];
    modifiers: WithContentElementBaseModifier<
      typeof CONTENT_ELEMENT_BLOCK.modifiers[number]
    >[];
    // ??
    backgroundImage?: backgroundImageProps;
    withContainer?: boolean;
  }>;
