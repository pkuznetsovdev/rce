import React from 'react';
import { CE, ContentElementConfigProps } from 'react-content-elements';
import { DailyCard, DailyCardProps } from '../daily-card';

interface DailyCardListProps {
  title?: ContentElementConfigProps<'text'>;
  dailyCards: DailyCardProps[];
}

export const DailyCardList = ({ title, dailyCards }: DailyCardListProps) => {
  return (
    <>
      <CE.Text content={title} modifiers={['title', 'i']} />
      <CE.List
        className='daily-card-list'
        // config={{ content: dailyCards, listItemTemplate: DailyCard }}
        listItemTemplate={DailyCard}
        content={dailyCards}
      />
    </>
  );
};