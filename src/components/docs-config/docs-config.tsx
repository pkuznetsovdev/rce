import React from 'react';
import CE from 'react-content-elements';
import { CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';

export const DocsConfig = () => {
  return (
    <>
      <CE.Text modifiers={['title']}>Config</CE.Text>
      <CE.Text>
        In Content Elements, the config property allows you to adjust all properties of an element.
        <br />
        By providing a configuration object, you can customize various properties of the element, and these
        configurations take precedence over other default or inline properties.
      </CE.Text>
      <CodeExample ex={CODE_EXAMPLES.CONFIG_USAGE} />
    </>
  );
};
