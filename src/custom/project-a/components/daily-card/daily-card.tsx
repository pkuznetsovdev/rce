import React from "react";
import { CE } from "src/ce";
import { MyElementConfigProps } from "src/ce/core/types";

interface DailyCardItemData {
  image?: MyElementConfigProps<"image">;
  title?: MyElementConfigProps<"text">;
}

export interface DailyCardProps extends React.PropsWithChildren {
  itemIndex?: number;
  itemData?: DailyCardItemData;
  title: MyElementConfigProps<"text">;
}

export const DailyCard = ({ itemData }: DailyCardProps) => {
  return (
    <CE.Block className="daily-card">
      <CE.Image modifiers={["card-image"]} config={{ src: itemData?.image }} />
      <CE.Block modifiers={["card-info"]}>
        <CE.Text modifiers={["card-title"]} config={itemData?.title} />
        <CE.Text modifiers={["card-description"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </CE.Text>
      </CE.Block>
    </CE.Block>
  );
};
