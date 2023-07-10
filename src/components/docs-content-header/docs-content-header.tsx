import React from 'react';
import CE from 'react-content-elements';
import type { ContentElementConfigProps } from 'react-content-elements';

export interface DailyCardProps extends React.PropsWithChildren {
  itemIndex?: number;
  image?: ContentElementConfigProps<'image'>;
  title?: ContentElementConfigProps<'text'>;
}

export const DocsContentHeader = ({ image, title }: DailyCardProps) => {
  return (
    <CE.Block className='docs-content-header'>
      <CE.Text>
        Content Elements serve as the foundation for representing basic HTML structures. The development process with
        Content Elements is formalized to efficiently generate these basic structures and manage associated styles.
        <br />A basic structure refers to any HTML or CSS code generated through Content Elements.
      </CE.Text>
    </CE.Block>
  );
};
