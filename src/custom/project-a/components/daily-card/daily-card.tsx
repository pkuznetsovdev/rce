import React from "react";
import { CE } from "src/ce";
import { MyElementConfigProps } from "src/ce/core/types";

export interface DailyCardProps extends React.PropsWithChildren {
  itemIndex?: number;
  image?: MyElementConfigProps<"image">;
  title?: MyElementConfigProps<"text">;
}

export const DailyCard = ({ image, title }: DailyCardProps) => {
  return (
    <CE.Block className="daily-card">
      <CE.Image modifiers={["card-image"]} config={{ src: image }} />
      <CE.Block modifiers={["card-info"]}>
        <CE.Text modifiers={["card-title"]} config={title} />
        <CE.Text modifiers={["card-description"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </CE.Text>
      </CE.Block>
    </CE.Block>
  );
};
