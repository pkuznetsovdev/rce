import React from "react";
import { BlockProps } from "./types";
import { WithMyTemplateElementProps } from "../../types";

export const Block = ({
  children,
  tag: TagName,
  text,
  ...props
}: BlockProps & WithMyTemplateElementProps) => {
  return (
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    <TagName {...props}>{children}</TagName>
  );
};
