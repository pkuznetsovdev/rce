import CE from 'react-content-elements';
import React from 'react';
import { CodeExampleTemplate } from 'src/modules';

export const CONTENT_USAGE: Array<CodeExampleTemplate> = [
  {
    el: <CE.Text>Hello world!</CE.Text>,
    stringified: `<CE.Text>Hello world!</CE.Text>`,
  },
  {
    el: <CE.Text content='Content from property'>Hello world!</CE.Text>,
    stringified: `<CE.Text content="Content from property">Hello world!</CE.Text>`,
  },
  {
    el: (
      <CE.Text content='Content from property' config={{ content: 'Content by config' }}>
        Hello world!
      </CE.Text>
    ),
    stringified: `<CE.Text content="Content from property" config={{ content: 'Content by config'}}>Hello world!</CE.Text>`,
  },
];
