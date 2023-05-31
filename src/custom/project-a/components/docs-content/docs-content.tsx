import React from 'react';
import { CE } from 'react-content-elements';
import ImageTag from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.22.35.png';
import { CodeExampleImage } from '../code-example-image';

export const DocsContent = () => {
  return (
    <>
      <CE.Text modifiers={['title']}>Tag</CE.Text>
      <CE.Text
        content={[
          'Each <mark>Content Element</mark> has a default tag applied by name of the element.',
          'If the tag is provided explicitely it will override a default value.',
          'It also depends on a template’s implementation.',
        ]}
      />
      <CodeExampleImage src={ImageTag} />
    </>
  );
};
