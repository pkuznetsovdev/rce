import React from "react";
import { CE } from "src/ce";
import { DailyCard } from "../daily-card";

const DAILY_TRANSLATIONS = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

const imageUrls = [
  "https://image.cnbcfm.com/api/v1/image/107196235-1676617290460-_GRAND-PRIZE_WINNER_-_Karthik_Subramaniam.jpg?ffmt=webp",
  "https://www.popsci.com/uploads/2022/12/01/SpaceX-rocket-over-mangroves-e1670022792625.jpg?auto=webp",
  "https://www.frommers.com/system/media_items/attachments/000/866/196/s980/p264_cp.jpg",
  "https://nypost.com/wp-content/uploads/sites/2/2022/12/national-geographic-pictures-of-the-year-24.jpg?quality=90&strip=all",
  "https://image.cnbcfm.com/api/v1/image/107196235-1676617290460-_GRAND-PRIZE_WINNER_-_Karthik_Subramaniam.jpg?ffmt=webp",
  "https://www.popsci.com/uploads/2022/12/01/SpaceX-rocket-over-mangroves-e1670022792625.jpg?auto=webp",
  "https://www.frommers.com/system/media_items/attachments/000/866/196/s980/p264_cp.jpg",
];

const dailyCardListData = Object.keys(DAILY_TRANSLATIONS).map((key, idx) => {
  return {
    day: key,
    title: {
      // @ts-ignore
      text: DAILY_TRANSLATIONS[key],
      modifiers: ["title"],
    },
    image: imageUrls[parseInt(idx)],
  };
});

export const DailyCardList = () => {
  return (
    <CE.List className="daily-card-list" listData={dailyCardListData}>
      <DailyCard />
    </CE.List>
  );
};
