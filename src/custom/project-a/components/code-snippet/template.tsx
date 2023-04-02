import React from "react";
import { CE } from "src/ce";
import { MyElementConfigProps } from "src/ce/core/types";

export interface CodeSnippetProps extends React.PropsWithChildren {
  itemIndex?: number;
  image?: MyElementConfigProps<"image">;
  title?: MyElementConfigProps<"text">;
}

export const CodeSnippet = ({ children }: CodeSnippetProps) => {
  return (
    <CE.Block className="code-snippet">
        <pre><code>{children}</code></pre>
    </CE.Block>
  );
};
