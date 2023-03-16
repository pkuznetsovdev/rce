import React from "react";
import { CE } from "src/ce";
import { MyElementConfigProps } from "src/ce/core/types";

interface DailyCardItemData {
  image?: MyElementConfigProps<"image">;
  title?: MyElementConfigProps<"text">;
}

interface DailyCardProps extends React.PropsWithChildren {
  itemIndex?: number;
  itemData?: DailyCardItemData;
  title: MyElementConfigProps<"text">;
}

export const DailyCard = ({ itemData }: DailyCardProps) => {
  return (
    // <CE.Block className="daily-card" config={{ backgroundImage: itemData?.image}}>
    <CE.Block className="daily-card">
      <CE.Image modifiers={["card-title"]} config={{ src: itemData?.image }} />
      <CE.Text modifiers={["card-title"]} config={itemData?.title} />
      <CE.Text modifiers={["card-description"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </CE.Text>
    </CE.Block>
  );
};
