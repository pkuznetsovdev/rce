const CONTENT_ELEMENT_CONDITION = (() => {
  const types = [] as const;
  const tags = [] as const;
  const modifiers = [] as const;

  return {
    _elementName: 'condition',
    _elementSettings: {
      // @ts-expect-error
      DEFAULT_TAG: tags[0],
    },
    types,
    tags,
    modifiers,
  };
})();

export type ContentElementCondition = typeof CONTENT_ELEMENT_CONDITION;
