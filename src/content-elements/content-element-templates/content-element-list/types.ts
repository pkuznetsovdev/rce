import { PropsWithChildren, HTMLProps } from 'react';
import { WithContentElementBaseModifier } from '../../types';

export const CONTENT_ELEMENT_LIST = (() => {
  const types = ['list-disk', 'list-oredered', 'list-grid'] as const;
  const tags = ['ul', 'ol'] as const;
  const modifiers = ['row', 'auto', 'column'] as const;

  return {
    _elementName: 'list',
    _elementSettings: {
      DEFAULT_TAG: tags[0],
    },
    types,
    tags,
    modifiers,
  };
})();

export type ContentElementList = typeof CONTENT_ELEMENT_LIST;

export type ContentElementListProps = HTMLProps<
  typeof CONTENT_ELEMENT_LIST.tags[number]
> &
  PropsWithChildren<{
    type: typeof CONTENT_ELEMENT_LIST.types[number];
    tag: typeof CONTENT_ELEMENT_LIST.tags[number];
    modifiers: WithContentElementBaseModifier<
      typeof CONTENT_ELEMENT_LIST.modifiers[number]
    >[];
    className?: string;
    //
    listItem?: {
      className?: string;
    };
  }>;
