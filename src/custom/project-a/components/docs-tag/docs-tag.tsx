import React from 'react';
import CE from 'react-content-elements';
import { CodeExample, CodeBlock } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';

export const DocsTag = () => {
  return (
    <>
      <CE.Text modifiers={['title']}>Tag</CE.Text>
      <CE.Text
        content={[
          'Each <mark>Content Element</mark> has a default tag applied by name of the element.',
          'If the tag is provided explicitely it will be used at first priority.',
          `The deafult value can be overriden by special modifers as well, f.e. 'title' modifier will change the default 'p' tag to 'h3'`,
        ]}
      />
      <CodeExample ex={CODE_EXAMPLES.TAG_USAGE} />
    </>
  );
};
