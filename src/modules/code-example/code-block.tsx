import React, { useContext } from 'react';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { a11yDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ThemeContext } from 'src/providers/theme';

export const CodeBlock = ({ children, language = 'javascript' }: SyntaxHighlighterProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <SyntaxHighlighter
      language={language}
      style={theme === 'dark' ? a11yDark : oneLight}
      wrapLongLines
      className={`code-block ${language}`}
    >
      {children}
    </SyntaxHighlighter>
  );
};
