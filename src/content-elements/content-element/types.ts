import { ContentElementTextProps } from '../content-element-templates';
import {
  CONTENT_ELEMENT_BUTTON,
  CONTENT_ELEMENT_DIVIDER,
  CONTENT_ELEMENT_ICON,
  CONTENT_ELEMENT_LINK,
  CONTENT_ELEMENT_TEMPLATES_BY_NAME,
} from './constants';
import type { WithContentElementBaseModifier } from '../types';
import type { RawContent } from 'src/shared';

import type { ContentElementImageProps } from '../content-element-templates/content-element-image';
import type { ContentElementBlockProps } from '../content-element-templates/content-element-block';
import type { ContentElementListProps } from '../content-element-templates/content-element-list';

export type ContentElementIcon = {
  type: typeof CONTENT_ELEMENT_ICON.types[number];
  tag: typeof CONTENT_ELEMENT_ICON.tags[number];
  modifiers: WithContentElementBaseModifier<
    typeof CONTENT_ELEMENT_ICON.modifiers[number]
  >[];
};
export type ContentElementButton = {
  type: typeof CONTENT_ELEMENT_BUTTON.types[number];
  tag: typeof CONTENT_ELEMENT_BUTTON.tags[number];
  modifiers: WithContentElementBaseModifier<
    typeof CONTENT_ELEMENT_BUTTON.modifiers[number]
  >[];
};
export type ContentElementLink = {
  type: typeof CONTENT_ELEMENT_LINK.types[number];
  tag: typeof CONTENT_ELEMENT_LINK.tags[number];
  modifiers: WithContentElementBaseModifier<
    typeof CONTENT_ELEMENT_LINK.modifiers[number]
  >[];
};
export type ContentElementDivider = {
  type: typeof CONTENT_ELEMENT_DIVIDER.types[number];
  tag: typeof CONTENT_ELEMENT_DIVIDER.tags[number];
  modifiers: WithContentElementBaseModifier<
    typeof CONTENT_ELEMENT_DIVIDER.modifiers[number]
  >[];
};

type ContentElementConditionProps = {
  type: never;
  modifiers: [];
  tag: never;
};

type ContentElementConditionConfigProps = ContentElementConditionProps & {
  showMultipleResults?: boolean;
  satisfyEveryCondition?: boolean;
  children?: JSX.Element[];
};

export type ContentElementsByName = {
  text: ContentElementTextProps;
  image: ContentElementImageProps;
  icon: ContentElementIcon;
  button: ContentElementButton;
  link: ContentElementLink;
  divider: ContentElementDivider;
  block: ContentElementBlockProps;
  list: ContentElementListProps;
  condition: ContentElementConditionConfigProps;
};

export type ContentElementName = keyof ContentElementsByName;

export type ContentElementsMap<T extends ContentElementName> =
  ContentElementsByName[T];

export type ContentElementTag =
  ContentElementsByName[ContentElementName]['tag'];
export type ContentElementType =
  ContentElementsByName[ContentElementName]['type'];
export type ContentElementModifiers = Exclude<
  ContentElementsByName[ContentElementName]['modifiers'],
  'undefined'
>;

export type ContentElementMap<T extends ContentElementName> =
  ContentElementsByName[T];

export type ContentElementRendererProps<T extends ContentElementName> = {
  name: T;
};

type ContentData = Record<string, any>;
type ContentElementConfig = {
  content?: RawContent | RawContent[] | undefined;
  contentData?: ContentData;
  contentDataKey?: keyof ContentData;
  className?: string;
};

type WithContentElementConfig<T> = T & ContentElementConfig;

export type ContentElementProps<T extends ContentElementName> =
  WithContentElementConfig<Partial<ContentElementsMap<T>>>;

export type ContentElementTemplatesMap<
  T extends keyof typeof CONTENT_ELEMENT_TEMPLATES_BY_NAME
> = typeof CONTENT_ELEMENT_TEMPLATES_BY_NAME[T];
