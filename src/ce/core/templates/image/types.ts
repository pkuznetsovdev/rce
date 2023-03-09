import React, { DetailedHTMLFactory, HTMLProps, ImgHTMLAttributes } from "react";
import { ImageSrcSet } from "../../types/image";


export type ImageProps = React.HTMLProps<HTMLImageElement> & {
    srcSet?: ImageSrcSet;
}
