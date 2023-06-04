import React from 'react';
import { CE } from 'react-content-elements';
import { CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';

export const DocsContent = () => {
  return (
    <>
      <CE.Text modifiers={['title']}>Tag</CE.Text>
      <CE.Text
        content={[
          'Content of the element might be any of valid HTML. It is passed to the element via <code>dangerouslySetInnerHTML</code> property.',
        ]}
      />
      <CodeExample ex={CODE_EXAMPLES.CONTENT_USAGE} />
    </>
  );
};
