import React from 'react';
import { ContentElementProps } from '../../content-element/types';

// no name
const ContentElementImage = ({
  children,
  tag: TagName,
  className,
  type,
  ...props
}: ContentElementProps<'image'>) => {
  console.log(props)
  // TODO: FIX TS contentElementTag type
  // @ts-ignore-next-line
  return <TagName className={className} {...props} />;
};

export default ContentElementImage;
