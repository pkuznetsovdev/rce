import React from "react";
import { CE } from "src/ce";
import { DailyCard, DailyCardProps } from "../daily-card";
import { MyElementConfigProps } from "src/ce/core/types";

interface DailyCardListProps {
  title?: MyElementConfigProps<"text">;
  dailyCards: DailyCardProps[];
}

export const DailyCardList = ({ title, dailyCards }: DailyCardListProps) => {
  return (
    <>
      <CE.Text text={title} modifiers={["title", "i"]} />
      <CE.List
        className="daily-card-list"
        listItemTemplate={DailyCard}
        content={dailyCards}
        // config={{ content, listItemTemplate: DailyCard }}
      />
    </>
  );
};
