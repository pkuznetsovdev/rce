import { CE } from 'react-content-elements';
import React from 'react';
import { CodeExampleTemplate } from 'src/custom/project-a/modules';

export const MODIFIERS_USAGE: Array<CodeExampleTemplate> = [
  {
    el: <CE.Text modifiers={['accent']} config='Hello world!' />,
    stringified: `<CE.Text modifiers={['accent']} config="Hello world!" />`,
  },
  {
    el: <CE.Text modifiers={['title']} config='Hello world!' />,
    stringified: `<CE.Text modifiers={['title']} config="Hello world!" />`,
  },
  {
    el: <CE.Text tag='h1' modifiers={['title']} config='Hello world!' />,
    stringified: `<CE.Text tag="h1" modifiers={['title']} config="Hello world!" />`,
  },
  {
    el: <CE.Text config={{ modifiers: ['title'], content: 'Hello World!' }} />,
    stringified: `<CE.Text config={{ modifiers: ["title"], content: "Hello World!" }} />`,
  },
  {
    el: <CE.Text modifiers={['title', 'accent']}>Hello world!</CE.Text>,
    stringified: `<CE.Text modifiers={["title", "accent"]}>Hello world!</CE.Text>`,
  },
  {
    el: <CE.Block modifiers={['container', 'section']}>Hello world!</CE.Block>,
    stringified: `<CE.Block modifiers={["container", "section"]}>Hello world!</CE.Block>`,
  },
];

export const MODIFIERS_FEATURES_USAGE = {
  aboveAndBeyond: [
    {
      el: <CE.Text modifiers={['title-above-xl', 'accent-beyond-sm']}>Hello world!</CE.Text>,
      stringified: `<CE.Text modifiers={["title-above-xl", "accent-beyond-sm"]}>Hello world!</CE.Text>`,
    },
    {
      el: <CE.Block modifiers={['row-above-md', 'section-below-xl']}>Hello world!</CE.Block>,
      stringified: `<CE.Block modifiers={["row-above-md", "section-below-xl"]}>Hello world!</CE.Block>`,
    },
  ],
  size: [
    {
      el: <CE.Text modifiers={['md', 'xl-above-md']}>Hello world!</CE.Text>,
      stringified: `<CE.Text modifiers={["md", "xl-above-md"]}>Hello world!</CE.Text>`,
    },
  ],
} as const;
