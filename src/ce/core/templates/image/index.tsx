import React from "react";
import { ImageProps } from "./types";
import { WithMyTemplateElementProps } from "../../types";
import { getNativeSrcSet } from "../../utils";

export const Image = ({
  children,
  tag,
  text,
    srcSet,
  ...props
}: React.PropsWithChildren<ImageProps & WithMyTemplateElementProps>) => {
  const { nativeSrcSet, sizes } = srcSet ? getNativeSrcSet(srcSet) : { nativeSrcSet: undefined, sizes: undefined};

  return <img {...props} srcSet={nativeSrcSet} sizes={sizes} />;
};
