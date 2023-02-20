import { WithContentElementBaseModifier } from '../../types';

export const CONTENT_ELEMENT_IMAGE = {
  _elementName: 'image',
  _elementSettings: {
    DEFAULT_TAG: 'img',
  },
  types: [],
  tags: ['img'],
  modifiers: [],
} as const;

type ContentElementImage = typeof CONTENT_ELEMENT_IMAGE;

export type ContentElementImageProps = Partial<HTMLImageElement> &
  Partial<{
    type: ContentElementImage['types'][number];
    tag: ContentElementImage['tags'][number];
    modifiers: WithContentElementBaseModifier<
      ContentElementImage['modifiers'][number]
    >[];
  }>;
