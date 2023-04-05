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
      <CE.Text content={title} modifiers={["title", "i"]} />
      <CE.List
        className="daily-card-list"
        // config={{ content: dailyCards, listItemTemplate: DailyCard }}
        listItemTemplate={DailyCard}
        content={dailyCards}
      />
    </>
  );
};
