import React from 'react';
import CE from 'react-content-elements';
import { CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';

export const DocsModifiers = () => {
  return (
    <>
      <CE.Text modifiers={['title']}>Modifiers</CE.Text>
      <CE.Text>By modifiers you adjust styles or behavoiur of the generated HTML structure.</CE.Text>
      <CE.Text>Each modifier is a string that represents a meaningful label for the particular element in HTML structure.</CE.Text>
      <CE.Text>Modifiers extend base <mark>Content Element</mark> class name and might change bahaviour, f.e. override a default tag in case tag was not provided explicitely via ‘tag’ property.</CE.Text>
      <CodeExample ex={CODE_EXAMPLES.MODIFIERS_USAGE} />
      <CE.Text modifiers={['list-title']}>Modifiers have following features:</CE.Text>
      <CE.List modifiers={['disc']}>
        <>
          <CE.Text>Above and Beyond</CE.Text>
          <CE.Text><code>above-[$ce-breakpoint]</code> - styles are applied for screen size {'≥'} <code>$ce-breakpoint-value</code></CE.Text>
          <CE.Text><code>beyond-[$ce-breakpoint]</code> - styles are applied for screen size {'<'} <code>$ce-breakpoint-value</code></CE.Text>
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
