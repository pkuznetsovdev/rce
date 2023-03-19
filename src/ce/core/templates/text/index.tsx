import React from "react";
import { TextProps } from "./types";
import { WithMyTemplateElementProps } from "../../types";

export const Text = ({
  children,
  tag: TagName,
  text,
  ...props
}: TextProps & WithMyTemplateElementProps) => {
  if (text && typeof text === "string") {
    return (
      // TODO: FIX TS className type
      // @ts-ignore-next-line
      <TagName {...props} dangerouslySetInnerHTML={{ __html: text }} />
    );
  }

  return (
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    <TagName {...props}>{children}</TagName>
  );
};
