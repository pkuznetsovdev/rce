import React from 'react';
import { CE, ContentElementConfigProps } from 'react-content-elements';
import { CodeExample } from '../../modules';
import ImageTag from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.22.35.png';
import ImageModifier from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.22.45.png';
import ImageModifier1 from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.23.04.png';
import ImageModifier2 from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.23.16.png';
import ImageModifier3 from '../../assets/images/code-examples/Screenshot 2023-04-04 at 22.24.54.png';
import ImageConfig from '../../assets/images/code-examples/Screenshot 2023-04-02 at 15.23.38.png';
import { CODE_EXAMPLES } from '../../constants';
import { CodeExampleImage } from '../code-example-image';

export interface DailyCardProps extends React.PropsWithChildren {
  itemIndex?: number;
  image?: ContentElementConfigProps<'image'>;
  title?: ContentElementConfigProps<'text'>;
}

const CE_PROPERTIES = ['tag', 'modifiers', 'content', 'config'];

export const DocsHtmlProps = ({ image, title }: DailyCardProps) => {
  return (
    <CE.Block className='docs-html'>
      <CE.Text modifiers={['list-title']}>
        All <mark>Content Elements</mark> are grouped by its role in the page:
      </CE.Text>
      <CE.List modifiers={['disc', 'i']} content={Object.keys(CE)} />
      <CE.Text modifiers={['list-title']}>
        All <mark>Content Elements</mark> have 4 special properties:
      </CE.Text>
      <CE.List modifiers={['disc', 'i']} content={CE_PROPERTIES} />
      <CE.Text modifiers={['list-title']}>
        All <mark>Content Elements</mark> have a base classname:
      </CE.Text>
      <CE.List
        modifiers={['disc']}
        content={['<i>ce ce-[name]</i><br />f.e. ‘ce ce-text’ for <mark>Text Content Element</mark>']}
      />
      <CodeExample ex={CODE_EXAMPLES.BASIC_USAGE} />
      <CE.Text modifiers={['title']}>Tag</CE.Text>
      <CE.Text
        content={[
          'Each <mark>Content Element</mark> has a default tag applied by name of the element.',
          'f the tag is provided explicitely it will override a default value.',
          'It also depends on a template’s implementation.',
        ]}
      />
      <CodeExampleImage src={ImageTag} />
      <CE.Text modifiers={['title']}>Modifiers</CE.Text>
      <CE.Text
        content={[
          'By modifiers you adjust styles or behavoiur of the generated HTML structure.',
          'Each modifier is a string that represents a meaningful label for the particular element in HTML structure.',
          'Modifiers extend base <mark>Content Element</mark> class name and might change bahaviour, f.e. override a default tag in case tag was not provided explicitely via ‘tag’ property.',
        ]}
      />
      <CodeExampleImage src={ImageModifier} />
      <CE.Text modifiers={['list-title']}>Modifiers have following features:</CE.Text>
      <CE.List modifiers={['disc']}>
        <>
          <CE.Text>Above and Beyond</CE.Text>
          <CodeExampleImage src={ImageModifier1} />
          <CE.Text
            content={[
              '<code>above-[$ce-breakpoint]</code> - styles are applied for screen size ≥ <code>$ce-breakpoint-value</code>',
              '<code>beyond-[$ce-breakpoint]</code> - styles are applied for screen size < <code>$ce-breakpoint-value</code>',
            ]}
          />
          <CodeExampleImage src={ImageModifier2} />
        </>
        <>
          <CE.Text>Size</CE.Text>
          <CE.Text>To define Content Element size use breakpoint key as a modifier:</CE.Text>
          <CodeExampleImage src={ImageModifier3} />
        </>
      </CE.List>
      <CE.Text modifiers={['title']}>Config</CE.Text>
      <CE.Text
        content={[
          'By config you can adjust all element properties.',
          'Properties provided via config will be applied at main priority.',
        ]}
      />
      <CodeExampleImage src={ImageConfig} />
    </CE.Block>
  );
};