import React from 'react';
import CE from 'react-content-elements';
import { CodeExample, CodeBlock } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';

export const DocsTag = () => {
  return (
    <>
      <CE.Text modifiers={['title']}>Tag</CE.Text>
      <CE.Text>Each <mark>Content Element</mark> has a default tag applied by name of the element.</CE.Text>
      <CE.Text>If the tag is provided explicitly it will be used at first priority.</CE.Text>
      <CE.Text>The default value can be overriden by special modifers as well, f.e. 'title' modifier will change the default 'p' tag to 'h3'</CE.Text>
      <CodeExample ex={CODE_EXAMPLES.TAG_USAGE} />
    </>
  );
};
