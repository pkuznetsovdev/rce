import React from 'react';
import { CE } from 'react-content-elements';
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
        <b>Content Elements</b> represent basic HTML structures. Development process with <b>Content Elements</b> is
        formalized in terms of generating basic structures(HTML) and styles(CSS). Basic structure is any piece of HTML
        or/and CSS that is generated via <b>Content Elements</b>.
      </CE.Text>
      <CE.Text
        modifiers={['list-title']}
        content='Let’s clarify a set of dependencies for the web content development flow:'
      />
      <CE.List
        modifiers={['disc']}
        content={[
          'HTML (set of basic structures instead of manual code duplications)',
          'CSS (simple and scalable style system, less dependent on HTML structure)',
          'SEO (tag name, aria-attributes, e.t.c. - simple adjustment in one click)',
        ]}
      ></CE.List>
    </CE.Block>
  );
};
