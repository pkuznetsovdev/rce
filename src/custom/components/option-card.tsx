import React from 'react';
import { ContentElements } from "../../content-elements";
import { getData } from "../utils/get-data";


type OptionCardProps = ReturnType<typeof getData<'IndexPage.options'>>[number] & {
  id: number;
}

const OptionCard = ({ image, title, description }: OptionCardProps) => {

  return (
    <ContentElements.Block modifiers={['option-card']}>
      <ContentElements.Text modifiers={['option-title']} text={title} />
      <ContentElements.Image modifiers={['option-image']} image={image} />
      <ContentElements.Text modifiers={['option-image']} text={description} />
    </ContentElements.Block>
  );
};

export default OptionCard;