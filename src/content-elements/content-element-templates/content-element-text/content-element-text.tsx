import React from "react";
import { TextProps } from "./types";

// no name
export const ContentElementText = ({
  children,
  tag: TagName,
  className,
  type,
  rawContent,
  ...props
}: TextProps) => {
  if (rawContent) {
    return (
      // TODO: FIX TS contentElementTag type
      // @ts-ignore-next-line
      <TagName
        className={className}
        {...props}
        dangerouslySetInnerHTML={{ __html: rawContent }}
      />
    );
  }
  return (
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    <TagName className={className} {...props}>
      {children}
    </TagName>
  );
};

export default ContentElementText;
