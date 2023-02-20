import React from 'react';
import { ContentElementTextProps } from './types';

// no name
const ContentElementText = ({
  children,
  tag: TagName,
  className,
  type,
  ...props
}: ContentElementTextProps) => {
  console.log(props)
  return (
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    <TagName className={className} {...props}>
      {children}
    </TagName>
  );
};

export default ContentElementText;
