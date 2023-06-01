import React, { ReactElement, useContext } from 'react';
import { CE } from 'react-content-elements';
import { SHARED_UTILS } from 'src/shared';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ThemeContext } from 'src/custom/providers/theme';

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
  const testRef = React.useRef<HTMLDivElement>(null);
  const [innerHtml, setInnerHtml] = React.useState('');
  const { theme } = useContext(ThemeContext);

  React.useEffect(() => {
    if (innerHtml === '') {
      setInnerHtml(testRef.current.innerHTML);
    }
  }, [innerHtml]);

  return (
    <CE.Block modifiers={['code-example']}>
      <div ref={testRef} style={{ display: 'none' }}>
        {el}
      </div>
      <SyntaxHighlighter language='javascript' style={theme === 'dark' ? a11yDark : oneLight} wrapLongLines>
        {stringified}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='html' style={theme === 'dark' ? a11yDark : oneLight} wrapLongLines>
        {`// HTML 
${innerHtml}`}
      </SyntaxHighlighter>
    </CE.Block>
  );
};
