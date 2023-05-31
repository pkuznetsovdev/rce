import { CE } from 'react-content-elements';
import React from 'react';
import { CodeExampleTemplate } from '../modules';

const BASIC_USAGE: Array<CodeExampleTemplate> = [
  {
    el: <CE.Text modifiers={['accent']}>Hello world!</CE.Text>,
    stringified: `<CE.Text modifiers={["accent"]}>Hello world!</CE.Text>`,
  },
  {
    el: <CE.Text config={{ content: 'Hello world!', modifiers: ['title'] }} />,
    stringified: `<CE.Text config={{ content: "Hello world!", modifiers: ['title'] }} />`,
  },
  {
    el: <CE.Image src='path/to/image.jpg' />,
    stringified: `<CE.Image src="path/to/image.jpg" />`,
  },
];

const TAG_USAGE: Array<CodeExampleTemplate> = [
  {
    el: <CE.Text>Text Content Element</CE.Text>,
    stringified: `<CE.Text>Text Content Element</CE.Text>`,
  },
  {
    el: <CE.Text modifiers={['title']}>Example with modifier</CE.Text>,
    stringified: `<CE.Text modifiers={['title']}>Example with modifier</CE.Text>`,
  },
  {
    el: (
      <CE.Text modifiers={['title']} tag='h1'>
        Example with "h1" tag
      </CE.Text>
    ),
    stringified: `<CE.Text modifiers={['title']} tag="h1">Example with "h1" tag</CE.Text>`,
  },
  {
    el: <CE.Text config={{ content: 'Hello world!', tag: 'h3' }}>Example with config</CE.Text>,
    stringified: `<CE.Text config={{ content: "Hello world!", tag: 'h3' }}>Example with config</CE.Text>`,
  },
  {
    el: <CE.Block>Block Content Element</CE.Block>,
    stringified: `<CE.Block>Block Content Element</CE.Block>`,
  },
  {
    el: <CE.Block tag='section'>Example with section tag</CE.Block>,
    stringified: `<CE.Block tag="section">Example with section tag</CE.Block>`,
  },
];

export const CODE_EXAMPLES = {
  BASIC_USAGE,
  TAG_USAGE,
};
