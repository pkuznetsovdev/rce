import React from 'react';
import CE from 'react-content-elements';
import { CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';

export const DocsModifiers = () => {
  return (
    <>
      <CE.Text modifiers={['title']}>Modifiers</CE.Text>
      <CE.Text>
        In the context of Content Elements, modifiers are used to adjust the styles or behavior of the generated HTML
        structure. A modifier is a string that represents a meaningful label for a specific element within the HTML
        structure.
      </CE.Text>
      <CE.Text>
        Modifiers extend the base class name of the Content Element and might override the default tag assigned to a
        Content Element.
      </CE.Text>
      <CE.Text>
        Modifiers provide a convenient way to extend and modify styles and behavior of Content Elements.
      </CE.Text>
      <CodeExample ex={CODE_EXAMPLES.MODIFIERS_USAGE} />
      <CE.Text modifiers={['list-title']}>
        Modifiers in Content Elements offer powerful feature to control styles based on screen sizes using breakpoints.
      </CE.Text>
      <CE.List modifiers={['disc']}>
        <>
          <CE.Text>Above and Beyond</CE.Text>
          <CE.Text>
            <code>above-[$ce-breakpoint]</code> - styles are applied for screen size {'≥'}{' '}
            <code>$ce-breakpoint-value</code>
          </CE.Text>
          <CE.Text>
            <code>beyond-[$ce-breakpoint]</code> - styles are applied for screen size {'<'}{' '}
            <code>$ce-breakpoint-value</code>
          </CE.Text>
          <CodeExample ex={CODE_EXAMPLES.MODIFIERS_FEATURES_USAGE.aboveAndBeyond} />
        </>
      </CE.List>
    </>
  );
};
