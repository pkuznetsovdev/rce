import React from "react";
import { CE } from "src/ce";

export interface CodeExampleProps extends Pick<HTMLImageElement, "src"> {}

export const CodeExample = ({ src }: CodeExampleProps) => {
  return <CE.Image src={src} className="code-example" />;
};
