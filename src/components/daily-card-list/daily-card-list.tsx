import React from 'react';
import CE from 'react-content-elements';
import { DailyCard, DailyCardProps } from '../daily-card';

export const DailyCardList = () => {
  const { dailyCardContent } = useDailyCardsContent();

  const dailyCards = sortByDay(dailyCardContent);

  return (
    <>
      <CE.List className='daily-card-list' ItemTemplate={DailyCard} content={dailyCards} />
    </>
  );
};

function useDailyCardsContent() {
  const DAILY_TRANSLATIONS = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  };

  const imageUrls = [
    'https://image.cnbcfm.com/api/v1/image/107196235-1676617290460-_GRAND-PRIZE_WINNER_-_Karthik_Subramaniam.jpg?ffmt=webp',
    'https://www.popsci.com/uploads/2022/12/01/SpaceX-rocket-over-mangroves-e1670022792625.jpg?auto=webp',
    'https://www.frommers.com/system/media_items/attachments/000/866/196/s980/p264_cp.jpg',
    'https://nypost.com/wp-content/uploads/sites/2/2022/12/national-geographic-pictures-of-the-year-24.jpg?quality=90&strip=all',
    'https://image.cnbcfm.com/api/v1/image/107196235-1676617290460-_GRAND-PRIZE_WINNER_-_Karthik_Subramaniam.jpg?ffmt=webp',
    'https://www.popsci.com/uploads/2022/12/01/SpaceX-rocket-over-mangroves-e1670022792625.jpg?auto=webp',
    'https://www.frommers.com/system/media_items/attachments/000/866/196/s980/p264_cp.jpg',
  ];

  const dailyCardContent = Object.keys(DAILY_TRANSLATIONS).map((key, idx) => {
    return {
      day: parseInt(key),
      id: parseInt(key),
      // @ts-ignore
      title: DAILY_TRANSLATIONS[key],
      // @ts-ignore
      image: imageUrls[parseInt(idx)],
    };
  });
  return { dailyCardContent };
}

function getWeekdaysRangeByCurrentDay() {
  const weekdaysRange = [1, 2, 3, 4, 5, 6, 7] as const;
  const currentUTCDayNumber = new Date().getUTCDay();

  return [weekdaysRange.slice(currentUTCDayNumber - 1), weekdaysRange.slice(0, currentUTCDayNumber - 1)].flat();
}

function sortByDay(dailyCards: DailyCardProps[]) {
  const weekdaysRangeByCurrentDay = getWeekdaysRangeByCurrentDay();
  return dailyCards.sort((a, b) => {
    if (a.day && b.day) {
      // @ts-ignore
      return weekdaysRangeByCurrentDay.indexOf(a.day) - weekdaysRangeByCurrentDay.indexOf(b.day);
    }
    return 1;
  });
}
