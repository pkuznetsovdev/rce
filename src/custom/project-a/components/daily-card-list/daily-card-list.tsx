import React from 'react';
import CE from 'react-content-elements';
import { DailyCard, DailyCardProps } from '../daily-card';

interface DailyCardListProps {
  title?: string;
  dailyCards: DailyCardProps[];
}

export const DailyCardList = ({ title, dailyCards }: DailyCardListProps) => {
  return (
    <>
      <CE.Text content={title} modifiers={['title', 'i']} />
      <CE.List
        className='daily-card-list'
        ItemTemplate={DailyCard}
        content={dailyCards}
      />
    </>
  );
};
