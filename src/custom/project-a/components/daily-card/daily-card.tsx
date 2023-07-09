import React from 'react';
import CE from 'react-content-elements';
import { ContentElementConfigProps } from 'react-content-elements';

export interface DailyCardProps extends React.PropsWithChildren {
  itemIndex?: number;
  image?: string;
  title?: ContentElementConfigProps<'text'>;
}

export const DailyCard = ({ image, title }: DailyCardProps) => {
  return (
    <CE.Block className='daily-card'>
      <CE.Image modifiers={['card-image']} config={{ src: image }} />
      <CE.Block modifiers={['card-info']}>
        <CE.Text modifiers={['card-title']} {...title} />
        <CE.Text modifiers={['card-description']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CE.Text>
      </CE.Block>
    </CE.Block>
  );
};
