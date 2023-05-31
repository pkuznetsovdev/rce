import React from 'react';
import { CE } from 'react-content-elements';
import { CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
      <SyntaxHighlighter language='javascript' style={a11yDark} wrapLongLines>
        {`const DEFAULT_TAGS_BY_NAME = {
    text: 'p',
    block: 'div',
    image: 'img',
    list: 'ul',
    link: 'a',
    divider: 'hr',
    button: 'button',
}
`}
      </SyntaxHighlighter>
      <CodeExample ex={CODE_EXAMPLES.TAG_USAGE} />
    </>
  );
};
