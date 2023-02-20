import React from 'react';
import { SHARED_UTILS } from 'src/shared/utils';
import { BASE_CLASSNAME } from '../constants';
import {
  CONTENT_ELEMENT_TEMPLATES_BY_NAME,
  CONTENT_ELEMENTS_BY_NAME,
} from './constants';
import {
  ContentElementName,
  ContentElementTag,
  ContentElementProps,
  ContentElementType,
  ContentElementModifiers,
} from './types';
import { ContentElementRenderer } from './content-element-renderer';

export function getContentElementRawContent<
  ElementName extends ContentElementName
>(name: ElementName, { contentElementProps }: ElementPropsByName<ElementName>) {
  const { content, ...restProps } = contentElementProps;

  if (!content || !content.length) {
    // TODO: WTF?
    // @ts-ignore-next-line
    return undefined;
  }

  const ContentElement = getContentElementByName(name);

  const contentConfig = typeof content === 'string' ? [content] : content;

  return contentConfig.map((rawContent) => {
    return (
      // TODO: WTF?
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      <ContentElement
        {...restProps}
        dangerouslySetInnerHTML={{ __html: rawContent }}
        key={rawContent}
      />
    );
  });
}

export function getContentElementByName<ElementName extends ContentElementName>(
  name: ElementName
) {
  return (props: ContentElementProps<ElementName>) =>
    ContentElementRenderer({ name, ...props });
}

export function getContentElementTemplateByName<
  Name extends ContentElementName
>(name: Name) {
  return CONTENT_ELEMENT_TEMPLATES_BY_NAME[name];
}

type ElementPropsByName<Name extends ContentElementName> = {
  contentElementProps: ContentElementProps<Name>;
};

export function getBaseContentElementClassName<Name extends ContentElementName>(
  name: Name,
  type?: ContentElementProps<Name>['type']
) {
  const classnameByType = type ? getModifierClassName(type) : '';

  return `${BASE_CLASSNAME} ${BASE_CLASSNAME}-${name} ${classnameByType}`.trim();
}

function getModifierClassName(
  // TODO fix: WTF?
  // @ts-ignore-next-line
  modifier: ContentElementModifiers[number]
) {
  return `${BASE_CLASSNAME}--${modifier}`;
}

export function getContentElementClassName<Name extends ContentElementName>(
  name: Name,
  { contentElementProps }: ElementPropsByName<Name>
) {
  const { modifiers, type, className } = contentElementProps;

  const baseClassName = getBaseContentElementClassName(name, type);

  const modifiersClassNames = modifiers?.map(getModifierClassName) || [];

  if (
    'backgroundImage' in contentElementProps &&
    contentElementProps['backgroundImage']
  ) {
    modifiersClassNames.push(getModifierClassName('with-bg'));
  }

  return SHARED_UTILS.getClassNames(
    className,
    baseClassName,
    modifiersClassNames
  );
}

export function getContentElementTag<Name extends ContentElementName>(
  name: Name,
  { contentElementProps }: ElementPropsByName<Name>
) {
  const { type, tag } = contentElementProps;
  if (tag && checkIsTagValidByName(tag, name)) {
    return contentElementProps.tag;
  }

  return (type && getDefaultTagByType(type)) || getDefaultTagByName(name);
}

const TYPES_BY_DEFAULT_TAG = {
  h1: new Set(['header']),
  h2: new Set(['title', 'section-title']),
  h3: new Set(['subheader', 'subtitle']),
  h4: new Set(['text-title']),
  section: new Set(['section']),
} as const;

function getDefaultTagByType<Type extends ContentElementType>(type: Type) {
  // TODO: WTF?
  // @ts-ignore-next-line
  return Object.keys(TYPES_BY_DEFAULT_TAG).filter((defaultTag) =>
    TYPES_BY_DEFAULT_TAG[defaultTag as keyof typeof TYPES_BY_DEFAULT_TAG].has(
      // TODO: WTF?
      // @ts-ignore-next-line
      type
    )
  )[0];
}

function getDefaultTagByName<Name extends ContentElementName>(name: Name) {
  return CONTENT_ELEMENTS_BY_NAME[name]._elementSettings.DEFAULT_TAG;
}

function checkIsTagValidByName<Name extends ContentElementName>(
  tag: ContentElementTag,
  name: Name
) {
  // TODO fix: WTF?
  // Type 'string' is not assignable to type 'never'
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore-next-line
  return CONTENT_ELEMENTS_BY_NAME[name].tags.includes(tag);
}

export function getContentElementProps<ElementName extends ContentElementName>(
  element: ContentElementProps<ElementName>,
  defaultProps: ContentElementProps<ElementName> = {}
): ContentElementProps<ElementName> {
  // TODO fix: WTF?
  // Type 'string' is not assignable to type 'never'
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore-next-line
  const modifiers = [
    ...(defaultProps?.modifiers || []),
    ...(element?.modifiers || []),
  ];

  return {
    ...defaultProps,
    ...element,
    modifiers,
  };
}
