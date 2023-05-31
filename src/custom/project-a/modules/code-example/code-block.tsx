import React, { useContext } from 'react';
import { CE } from 'react-content-elements';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { a11yDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ThemeContext } from "src/custom/providers/theme";

export const CodeBlock = ({children}: SyntaxHighlighterProps) => {
    const { theme } = useContext(ThemeContext);

    return (
            <SyntaxHighlighter language='javascript' style={theme === 'dark' ? a11yDark : oneLight} wrapLongLines>
                {children}
            </SyntaxHighlighter>
    );
};


