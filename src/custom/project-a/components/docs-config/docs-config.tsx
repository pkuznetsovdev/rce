import React from 'react';
import { CE } from 'react-content-elements';
import { CodeExampleImage } from '../code-example-image';
import ImageConfig from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.23.38.png';

export const DocsConfig = () => {
  return (
    <>
      <CE.Text modifiers={['title']}>Config</CE.Text>
      <CE.Text
        content={[
          'By config you can adjust all element properties.',
          'Properties provided via config will be applied at main priority.',
        ]}
      />
      <CodeExampleImage src={ImageConfig} />
    </>
  );
};
