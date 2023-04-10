import React from "react";
import { CE } from "react-content-elements";
import { MyElementConfigProps } from "react-content-elements";

export interface CodeSnippetProps extends React.PropsWithChildren {
  itemIndex?: number;
  image?: MyElementConfigProps<"image">;
  title?: MyElementConfigProps<"text">;
}

export const CodeSnippet = ({ children }: CodeSnippetProps) => {
  return (
    <CE.Block className="code-snippet">
      <pre>
        <code>{children}</code>
      </pre>
    </CE.Block>
  );
};
