import CE from 'react-content-elements';
import React from 'react';
import { CodeExampleTemplate } from 'src/custom/project-a/modules';

export const CONFIG_USAGE: Array<CodeExampleTemplate> = [
  {
    el: (
      <CE.Text
        config={{
          modifiers: ['title'],
          content: 'Hello World!',
        }}
      />
    ),
    stringified: `<CE.Text config={{ modifiers: ["title"], content: "Hello World!" }} />`,
  },
  {
    el: (
      <CE.Text
        tag='h1'
        modifiers={['title']}
        config={{
          content: 'Hello World! By Config.',
          tag: 'h2',
          modifiers: ['accent'],
        }}
      >
        Hello world!
      </CE.Text>
    ),
    stringified: `<CE.Text
                tag="h1"
                modifiers={['title']}
                config={{
                    content: "Hello World! By Config.",
                    tag: 'h2',
                    modifiers: ["accent"]
                }}>
                Hello world!
            </CE.Text>`,
  },
];
