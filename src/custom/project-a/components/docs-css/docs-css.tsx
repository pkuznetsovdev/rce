import React from 'react';
import CE from 'react-content-elements';
import { ContentElementConfigProps } from 'react-content-elements';
import { CodeExampleImage } from '../code-example-image';
import ImageByName from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.23.46.png';
import ImageByModifier from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.23.55.png';
import ImageWithModifier from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.24.06.png';
import ImageOtherModifiers from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.24.12.png';

export interface DailyCardProps extends React.PropsWithChildren {
  itemIndex?: number;
  image?: ContentElementConfigProps<'image'>;
  title?: ContentElementConfigProps<'text'>;
}

export const DocsCss = ({ image, title }: DailyCardProps) => {
  return (
    <CE.Block className='docs-html'>
      <CE.Text>Base Content Element class name is:</CE.Text>
      <CE.Text modifiers={['with-disc']} content={['<code>ce ce-[name]</code>']} />
      <CE.Text>Modifiers extend the base Content Element class name with following pattern: </CE.Text>
      <CE.Text
        modifiers={['with-disc']}
        content={['<code>ce ce-[name] ce--[modifier] ce--[another-modifier]</code>']}
      />

      <CE.Text>
        Styles are applied to the <mark>Content Elements</mark> via mixins.
      </CE.Text>
      <CE.Text modifiers={['title']}>@byName</CE.Text>
      <CodeExampleImage src={ImageByName} />

      <CE.Text modifiers={['title']}>@byModifier</CE.Text>
      <CodeExampleImage src={ImageByModifier} />

      <CE.Text modifiers={['title']}>@withModifier</CE.Text>
      <CodeExampleImage src={ImageWithModifier} />

      <CE.Text modifiers={['list-title']}>
        <mark>Additional mixins:</mark>
      </CE.Text>
      <CE.List modifiers={['disc']} content={['<code>@nextByName</code>', '<code>@nextByModifier</code>']} />
      <CodeExampleImage src={ImageOtherModifiers} />
    </CE.Block>
  );
};
