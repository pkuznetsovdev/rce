import React from 'react';
import { ContentElementTextProps } from './types';

// no name
const ContentElementText = ({
  children,
  tag: TagName,
  className,
  type,
  rawContent,
  ...props
}: ContentElementTextProps & { rawContent?: string; }) => {
  if (rawContent) {
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    return <TagName className={className} {...props} dangerouslySetInnerHTML={{ __html: rawContent }}/>
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
