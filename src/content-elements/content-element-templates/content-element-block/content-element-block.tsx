import React from 'react';
import { ContentElementProps } from '../../content-element/types';
import { getContentDataByKey } from './utils';
import type { backgroundImageProps } from './types';
import { useGetCurrentBreakpointName } from "src/shared/models";

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
}: ContentElementProps<'block'>) => {
  const bgSrc = useGetBgSrc(backgroundImage);

  return (
    // TODO: fix ContentElementTag type
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

function useGetBgSrc(bg: backgroundImageProps | undefined) {
  const breakpointName = useGetCurrentBreakpointName();

  if (!bg) {
    return;
  }

  const { src, srcSet } = bg;

  let bgSrc = src as string;

  if (breakpointName && srcSet && srcSet[breakpointName]) {
    bgSrc = srcSet[breakpointName];
  }

  return bgSrc;
}
