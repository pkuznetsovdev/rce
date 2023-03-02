import React from "react";

import type { MyElementTemplateProps } from "../../types";

export const MyElementText = ({
  children,
  tag: TagName = "p",
  className,
  content,
  ...props
}: MyElementTemplateProps<"text">) => {
  if (content && typeof content === "string") {
    return (
      // TODO: FIX TS className type
      // @ts-ignore-next-line
      <TagName
        {...props}
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
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
