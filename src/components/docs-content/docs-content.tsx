import React from 'react';
import CE from 'react-content-elements';
import { CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';

export const DocsContent = () => {
  return (
    <>
      <CE.Text modifiers={['title']}>Content</CE.Text>
      <CE.Text>
        In Content Elements, the content of an element can be any valid HTML markup. This content is passed to the
        element using the dangerouslySetInnerHTML property, which allows you to directly set the inner HTML of the
        element.
      </CE.Text>
      <CodeExample ex={CODE_EXAMPLES.CONTENT_USAGE} />
    </>
  );
};
