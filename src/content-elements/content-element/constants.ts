import ContentElementText, {
  CONTENT_ELEMENT_TEXT,
} from '../content-element-templates/content-element-text';
import ContentElementImage, {
  CONTENT_ELEMENT_IMAGE,
} from '../content-element-templates/content-element-image';
import ContentElementBlock, {
  CONTENT_ELEMENT_BLOCK,
} from '../content-element-templates/content-element-block';
import ContentElementList, {
  CONTENT_ELEMENT_LIST,
} from '../content-element-templates/content-element-list';
import ContentElementCondition from '../content-element-templates/content-element-condition';

export const CONTENT_ELEMENT_ICON = {
  _elementName: 'icon',
  _elementSettings: {
    DEFAULT_TAG: 'svg',
  },
  types: [],
  tags: ['svg'],
  modifiers: ['1'],
} as const;

export const CONTENT_ELEMENT_BUTTON = {
  _elementName: 'button',
  _elementSettings: {
    DEFAULT_TAG: 'button',
  },
  types: ['button-icon', 'primary', 'secondary', 'cta', 'sign-in', 'reg'],
  tags: ['button', 'a'],
  modifiers: ['row', 'auto', 'column'],
} as const;

export const CONTENT_ELEMENT_LINK = {
  _elementName: 'link',
  _elementSettings: {
    DEFAULT_TAG: 'a',
  },
  types: ['button'],
  tags: ['a', 'button'],
  modifiers: ['1'],
} as const;

export const CONTENT_ELEMENT_DIVIDER = {
  _elementName: 'divider',
  _elementSettings: {
    DEFAULT_TAG: 'hr',
  },
  types: [],
  tags: ['hr'],
  modifiers: ['1'],
} as const;

export const CONTENT_ELEMENTS_BY_NAME = {
  text: CONTENT_ELEMENT_TEXT,
  icon: CONTENT_ELEMENT_ICON,
  button: CONTENT_ELEMENT_BUTTON,
  link: CONTENT_ELEMENT_LINK,
  image: CONTENT_ELEMENT_IMAGE,
  divider: CONTENT_ELEMENT_DIVIDER,
  block: CONTENT_ELEMENT_BLOCK,
  list: CONTENT_ELEMENT_LIST,
  ceList: CONTENT_ELEMENT_LIST,
  condition: CONTENT_ELEMENT_LIST,
} as const;

export const CONTENT_ELEMENT_TEMPLATES_BY_NAME = {
  text: ContentElementText,
  image: ContentElementImage,
  block: ContentElementBlock,
  list: ContentElementList,
  ceList: ContentElementList,
  condition: ContentElementCondition,
  //
  icon: ContentElementText,
  button: ContentElementText,
  link: ContentElementText,
  divider: ContentElementText,
} as const;
