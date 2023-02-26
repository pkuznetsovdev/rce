import React from "react";
import { ContentElementProps } from "../../content-element/types";
import { getContentDataByKey } from "./utils";
import { useGetBgSrc } from "./useGetBgSrc";

const ContentElementBlock = ({
  children,
  tag: TagName,
  className,
  modifiers,
  type,
  backgroundImage,
  contentData,
  withContainer,
  ...props
}: ContentElementProps<"block">) => {
  const bgSrc = useGetBgSrc(backgroundImage);

  return (
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    <TagName
      className={className}
      {...props}
      style={{
        ...(props.style || {}),
        ...(bgSrc ? { backgroundImage: `url(${bgSrc})` } : {}),
      }}
    >
      {React.Children.map(children, (child) => {
        // @ts-ignore
        const childContentDataKey = child?.props?.contentDataKey;
        let childContentData = null;

        if (children && contentData && childContentDataKey) {
          childContentData = getContentDataByKey(
            contentData,
            childContentDataKey
          );
        }

        return child && contentData
          ? // @ts-ignore
            React.cloneElement(child, {
              [childContentDataKey]: childContentData,
            })
          : child;
      })}
    </TagName>
  );
};

export default ContentElementBlock;
