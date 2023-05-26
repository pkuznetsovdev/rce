import { CE } from 'react-content-elements';
import React from 'react';
import { CodeExampleTemplate } from '../modules';

const BASIC_USAGE: Array<CodeExampleTemplate> = [
  {
    el: <CE.Text>Hello world!</CE.Text>,
    displayNameId: 'text',
  },
  {
    el: <CE.Text config='Hello world!' />,
    displayNameId: 'text',
  },
  {
    el: <CE.Text config={{ content: 'Hello world!' }} />,
    displayNameId: 'text',
  },
  {
    el: <CE.Text content='Hello world!' />,
    displayNameId: 'text',
  },
  {
    el: <CE.Image src='path/to/image.jpg' />,
    displayNameId: 'image',
  },
  {
    el: <CE.Block modifiers={['container']}>Hello world!</CE.Block>,
    displayNameId: 'block',
  },
];

export const CODE_EXAMPLES = {
  BASIC_USAGE,
};
