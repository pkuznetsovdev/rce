import React from "react";
import { CE } from "src/ce";
import { BREAKPOINT_NAMES } from "src/ce/core/constants";
import { getBpValue } from "src/ce/core/utils";
import { MyElementConfigProps } from "src/ce/core/types";

const imageSrcSet = BREAKPOINT_NAMES.reduce((res, name) => {
  return {
    ...res,
    [name]: `https://dummyimage.com/${getBpValue(name)}`,
  };
}, {});

interface DailyCardProps extends React.PropsWithChildren {
  itemIndex?: number;
  itemData?: number;
  title: MyElementConfigProps<"text">;
}

const defaultImageUrl = "https://dummyimage.com/";

export const DailyCard = ({ itemData }: DailyCardProps) => {
  const imageSrc = itemData?.image || defaultImageUrl;

  return (
    <CE.Block className="daily-card">
      <CE.Text config={itemData?.title} />
      <CE.Image config={imageSrc} />
    </CE.Block>
  );
};
