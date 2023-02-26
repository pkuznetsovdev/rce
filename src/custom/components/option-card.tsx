import React from "react";
import { ContentElements } from "src/content-elements";
import { useGetData } from "src/custom/data";

type OptionCardProps = ReturnType<
  typeof useGetData<"IndexPage.options">
>[number] & {
  id: number;
};

export const OptionCard = ({ image, title, description }: OptionCardProps) => {
  return (
    <ContentElements.Block modifiers={["option-card"]}>
      <ContentElements.Text modifiers={["option-title"]} text={title} />
      <ContentElements.Image modifiers={["option-image"]} image={image} />
      <ContentElements.Text
        modifiers={["option-description"]}
        text={description}
      />
      <ContentElements.Text text={description} />
      <ContentElements.Text text="text by string" />
      <ContentElements.Text>text by children</ContentElements.Text>
    </ContentElements.Block>
  );
};
