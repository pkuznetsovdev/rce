import React from "react";
import { CE } from "react-content-elements";

export interface CodeExampleProps extends Pick<HTMLImageElement, "src"> {}

export const CodeExample = ({ src }: CodeExampleProps) => {
  return <CE.Image src={src} className="code-example" />;
};
