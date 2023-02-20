import React from 'react';
import { ContentElements } from "../content-elements";

const Index = () => {
  return (
    <ContentElements.Page>
      <ContentElements.Text modifiers={['header']}>React Content Elements</ContentElements.Text>
      <ContentElements.Text modifiers={['subheader']}>Develop content, structure is done</ContentElements.Text>
    </ContentElements.Page>
  );
};

export default Index;