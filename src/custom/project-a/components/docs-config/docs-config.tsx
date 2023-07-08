import React from 'react';
import CE from 'react-content-elements';
import { CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';

export const DocsConfig = () => {
  return (
    <>
      <CE.Text modifiers={['title']}>Config</CE.Text>
      <CE.Text>By config you can adjust all element properties.</CE.Text>
      <CE.Text>Properties provided via config will be applied at main priority.</CE.Text>
      <CodeExample ex={CODE_EXAMPLES.CONFIG_USAGE} />
    </>
  );
};
