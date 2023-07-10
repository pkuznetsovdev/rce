import React from 'react';
import CE from 'react-content-elements';
import { ContentElementConfigProps } from 'react-content-elements';
import { CodeBlock, CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';
import { Collapsible } from '../collapsible';

export interface DailyCardProps extends React.PropsWithChildren {
  itemIndex?: number;
  image?: ContentElementConfigProps<'image'>;
  title?: ContentElementConfigProps<'text'>;
}

export const DocsCss = ({ image, title }: DailyCardProps) => {
  return (
    <CE.Block className='docs-css'>
      <CE.Text>The base class name for Content Elements is structured as follows:</CE.Text>
      <CE.Text modifiers={['with-disc']}>
        <b>ce ce-[name]</b>
      </CE.Text>
      <CE.Text>
        The <b>ce</b> prefix stands for "Content Element," and <b>[name]</b> represents the specific name or type of the
        Content Element.
      </CE.Text>
      <CE.Text>Modifiers extend the base Content Element class name using the following pattern:</CE.Text>
      <CE.Text modifiers={['with-disc', 'bold']}>ce ce-[name] ce--[modifier] ce--[another-modifier]</CE.Text>
      <CE.Text>
        Each modifier is denoted by the <b>ce--</b> prefix followed by the specific modifier name.
        <br />
        Multiple modifiers are applied by separating them with spaces.
      </CE.Text>
      <CE.Text>Styles for Content Elements are applied using mixins.</CE.Text>

      <Collapsible title='@byName'>
        <CodeBlock language='scss'>{CODE_EXAMPLES.MODIFIERS.BY_NAME}</CodeBlock>
      </Collapsible>

      <Collapsible title='@byModifier'>
        <CE.Text>
          The styles generated by the following mixin include selectors for screen sizes defined by every breakpoint.
          <br />
          The values of the breakpoints can be locally overridden in your project. To do so, you can include a file that
          reassigns the values of the breakpoints before using the mixin. By reassigning the values, you can customize
          the breakpoints to align with your specific project requirements.
          <br />
          Make sure that the file with the reassigned breakpoint values is included before the actual usage of the
          mixin.
        </CE.Text>
        <CodeBlock language='scss'>{CODE_EXAMPLES.MODIFIERS.BY_MODIFIER}</CodeBlock>
      </Collapsible>

      <Collapsible title='@withModifier'>
        <CE.Text>
          The styles generated by the following mixin include selectors for screen sizes defined by every breakpoint.
        </CE.Text>
        <CodeBlock language='scss'>{CODE_EXAMPLES.MODIFIERS.WITH_MODIFIER}</CodeBlock>
      </Collapsible>

      <Collapsible title='@nextByName'>
        <CodeBlock language='scss'>{CODE_EXAMPLES.MODIFIERS.NEXT_BY_NAME}</CodeBlock>
      </Collapsible>

      <Collapsible title='@nextByModifier'>
        <CodeBlock language='scss'>{CODE_EXAMPLES.MODIFIERS.NEXT_BY_MODIFIER}</CodeBlock>
      </Collapsible>

      <Collapsible title='@childByName'>
        <CodeBlock language='scss'>{CODE_EXAMPLES.MODIFIERS.CHILD_BY_NAME}</CodeBlock>
      </Collapsible>

      <Collapsible title='@childByModifier'>
        <CodeBlock language='scss'>{CODE_EXAMPLES.MODIFIERS.CHILD_BY_MODIFIER}</CodeBlock>
      </Collapsible>
    </CE.Block>
  );
};