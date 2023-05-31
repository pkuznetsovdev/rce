import React, { ReactElement } from 'react';
import { CE } from 'react-content-elements';
import { SHARED_UTILS } from 'src/shared';
import Highlight from 'react-highlight';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type DisplayNameByIdMap = {
  [CEKey in Lowercase<keyof typeof CE>]: `CE.${Capitalize<CEKey>}`;
};

const DISPLAY_NAME_BY_ID = Object.keys(CE).reduce(
  (r, k) => ({
    ...r,
    [k.toLowerCase()]: `CE.${SHARED_UTILS.capitalize(k)}`,
  }),
  {},
) as DisplayNameByIdMap;

type DisplayNameById = typeof DISPLAY_NAME_BY_ID;
type DisplayNameIds = Array<keyof DisplayNameById>;

type CodeExampleProps = { ex: CodeExampleTemplateProps | Array<CodeExampleTemplateProps> };

export const CodeExample = ({ ex }: CodeExampleProps) => {
  if (Array.isArray(ex)) {
    return (
      <CE.List modifiers={['code-examples']}>
        {ex.map((example) => (
          <CodeExampleTemplate key={example.el.toString()} {...example} />
        ))}
      </CE.List>
    );
  }

  return <CodeExampleTemplate key={ex.el.toString()} {...ex} />;
};

type CodeExampleTemplateProps = {
  el: ReactElement;
  stringified: string;
  id?: number | string;
  noResult?: boolean;
};

export type CodeExampleTemplate = CodeExampleTemplateProps;

const CodeExampleTemplate = ({ el, stringified, noResult }: CodeExampleTemplateProps) => {
  const testRef = React.useRef<Element>(null);
  const [innerHtml, setInnerHtml] = React.useState('');

  React.useEffect(() => {
    if (!testRef.current) {
      testRef.current = document.getElementById(stringified)?.querySelector('#code-example-result');
    } else {
      setInnerHtml(testRef.current.innerHTML);
    }
  }, [stringified]);

  return (
    <CE.Block modifiers={['code-example']} id={stringified}>
      {/*<CE.Text modifiers={['i', 'bolder']}>Code:</CE.Text>*/}
      <SyntaxHighlighter language='javascript' style={a11yDark} wrapLongLines>
        {stringified}
      </SyntaxHighlighter>
      {/*<CE.Text modifiers={['i']}>HTML:</CE.Text>*/}
      <SyntaxHighlighter language='html' style={a11yDark} wrapLongLines>
        {`// HTML 
${innerHtml}`}
      </SyntaxHighlighter>
      <CE.Block id='code-example-result' style={{ display: 'none' }}>
        {el}
      </CE.Block>
    </CE.Block>
  );
};
