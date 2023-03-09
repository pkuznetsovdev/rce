import React from "react";
import { ImageProps } from "./types";
import { WithMyTemplateElementProps } from "../../types";
import { IMAGE_SRC_SET } from "../../constants";
import { getSrcSet } from "../../utils";

export const Image = ({
  children,
  tag,
  text,
  ...props
}: React.PropsWithChildren<ImageProps & WithMyTemplateElementProps>) => {
  const srcSet = props.srcSet && getSrcSet(props.srcSet);

  return <img {...props} srcSet={srcSet} />;
};
