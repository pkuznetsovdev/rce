import React from 'react';
import CE from 'react-content-elements';
import { CodeExampleImage } from '../code-example-image';
import ImageModifier from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.22.45.png';
import ImageModifier1 from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.23.04.png';
import ImageModifier2 from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.23.16.png';
import ImageModifier3 from '../../assets/images/code-examples/Screenshot 2023-04-04 at 22.24.54.png';
import { CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';

export const DocsModifiers = () => {
  return (
    <>
      <CE.Text modifiers={['title']}>Modifiers</CE.Text>
      <CE.Text
        content={[
          'By modifiers you adjust styles or behavoiur of the generated HTML structure.',
          'Each modifier is a string that represents a meaningful label for the particular element in HTML structure.',
          'Modifiers extend base <mark>Content Element</mark> class name and might change bahaviour, f.e. override a default tag in case tag was not provided explicitely via ‘tag’ property.',
        ]}
      />
      <CodeExample ex={CODE_EXAMPLES.MODIFIERS_USAGE} />
      <CE.Text modifiers={['list-title']}>Modifiers have following features:</CE.Text>
      <CE.List modifiers={['disc']}>
        <>
          <CE.Text>Above and Beyond</CE.Text>
          <CE.Text
            content={[
              '<code>above-[$ce-breakpoint]</code> - styles are applied for screen size ≥ <code>$ce-breakpoint-value</code>',
              '<code>beyond-[$ce-breakpoint]</code> - styles are applied for screen size < <code>$ce-breakpoint-value</code>',
            ]}
          />
          <CodeExample ex={CODE_EXAMPLES.MODIFIERS_FEATURES_USAGE.aboveAndBeyond} />
        </>
        <>
          <CE.Text>Size</CE.Text>
          <CE.Text>To define Content Element size use breakpoint key as a modifier:</CE.Text>
          <CodeExample ex={CODE_EXAMPLES.MODIFIERS_FEATURES_USAGE.size} />
        </>
      </CE.List>
    </>
  );
};
