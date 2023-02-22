import React from 'react';
import { ContentElements } from "src/content-elements";
import { useGetData } from "src/data";


type OptionCardProps = ReturnType<typeof useGetData<'IndexPage.options'>>[number] & {
  id: number;
}

export const OptionCard = ({ image, title, description }: OptionCardProps) => {

  return (
    <ContentElements.Block modifiers={['option-card']}>
      <ContentElements.Text modifiers={['option-title']} text={title} />
      <ContentElements.Image modifiers={['option-image']} image={image} />
      <ContentElements.Text modifiers={['option-image']} text={description} />
    </ContentElements.Block>
  );
};
