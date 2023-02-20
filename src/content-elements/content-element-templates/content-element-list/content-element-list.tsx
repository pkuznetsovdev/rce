import React, { PropsWithChildren } from 'react';
import { ContentElementProps } from '../../content-element/types';

const ContentElementList = ({
  children,
  tag: TagName,
  className,
  type,
  content,
  listItem,
  modifiers,
  ...props
}: ContentElementProps<'list'>) => {
  const ListItem = React.useCallback(
    ({ children, ...props }: PropsWithChildren<object>, index: number) => {
      return (
        <li {...props} key={index} className={listItem?.className}>
          {children}
        </li>
      );
    },
    []
  );

  return (
    // TODO: fix ContentElementTag type
    // @ts-ignore-next-line
    <TagName className={className} {...props}>
      {React.Children.map(children, (child) => {
        return <ListItem>{child}</ListItem>;
      })}
    </TagName>
  );
};

export default ContentElementList;
