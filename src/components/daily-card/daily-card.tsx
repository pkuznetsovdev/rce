import React from 'react';
import CE from 'react-content-elements';

export interface DailyCardProps extends React.PropsWithChildren {
  image: string;
  title: string;
  day: number;
  id: number;
}

export const DailyCard = ({ image, title }: DailyCardProps) => {
  return (
    <CE.Block className='daily-card'>
      <CE.Image modifiers={['card-image']} config={{ src: image }} />
      <CE.Block modifiers={['card-info']}>
        <CE.Text modifiers={['card-title']}>{title}</CE.Text>
      </CE.Block>
    </CE.Block>
  );
};
