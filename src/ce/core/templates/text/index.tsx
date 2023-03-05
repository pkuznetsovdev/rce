import React from "react";
import { TextProps } from "./types";
import { WithMyTemplateElementProps } from "../../types";

export const MyElementText = ({
  children,
  tag: TagName = "p",
  content,
  ...props
}: TextProps & WithMyTemplateElementProps) => {
  if (content && typeof content === "string") {
    return (
      // TODO: FIX TS className type
      // @ts-ignore-next-line
      <TagName {...props} dangerouslySetInnerHTML={{ __html: content }} />
    );
  }

  return (
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    <TagName {...props}>{children}</TagName>
  );
};
