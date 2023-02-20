import React from 'react';
import { ContentElements } from "../content-elements";
import { DATA_BY_PAGE } from "../data";

const Index = () => {
  return (
    <ContentElements.Page>
      <ContentElements.Text modifiers={['header']} >React Content Elements</ContentElements.Text>
      <ContentElements.Text modifiers={['subheader']}>Develop content, structure is done</ContentElements.Text>
      <ContentElements.List className={'option-card-list'}></ContentElements.List>
    </ContentElements.Page>
  );
};

export default Index;