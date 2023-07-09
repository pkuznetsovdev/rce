import React, { ReactElement, useContext } from 'react';
import CE from 'react-content-elements';
import { SHARED_UTILS } from 'src/shared';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
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

type CodeExampleProps = {
  ex: CodeExampleTemplateProps | Array<CodeExampleTemplateProps> | ReadonlyArray<CodeExampleTemplateProps>;
};

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

  // @ts-ignore
    return <CodeExampleTemplate key={ex.el.toString()} {...ex} />;
};

type CodeExampleTemplateProps = {
  el: ReactElement;
  stringified: string;
  id?: number | string;
};

export type CodeExampleTemplate = CodeExampleTemplateProps;

const CodeExampleTemplate = ({ el, stringified }: CodeExampleTemplateProps) => {
  const testRef = React.useRef<HTMLDivElement>(null);
  const [innerHtml, setInnerHtml] = React.useState('');
  const { theme } = useContext(ThemeContext);

  React.useEffect(() => {
    if (innerHtml === '' && testRef.current) {
      setInnerHtml(testRef.current.innerHTML);
    }
  }, [innerHtml]);

  return (
    <CE.Block modifiers={['code-example']}>
      <div ref={testRef} style={{ display: 'none' }}>
        {el}
      </div>
      <SyntaxHighlighter language='javascript' style={theme === 'dark' ? a11yDark : oneLight}>
        {stringified}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='html' style={theme === 'dark' ? a11yDark : oneLight}>
        {`// HTML 
${innerHtml}`}
      </SyntaxHighlighter>
    </CE.Block>
  );
};
