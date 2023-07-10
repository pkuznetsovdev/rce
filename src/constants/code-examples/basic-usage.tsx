import CE from 'react-content-elements';
import React from 'react';
import { CodeExampleTemplate } from 'src/modules';

export const BASIC_USAGE: Array<CodeExampleTemplate> = [
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
