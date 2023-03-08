import React from "react";
import { ImageProps } from "./types";
import { WithMyTemplateElementProps } from "../../types";

export const Image = ({
  children,
  tag: TagName,
  text,
  ...props
}: ImageProps & WithMyTemplateElementProps) => {
  return <img {...props} />;
};
