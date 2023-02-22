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
  items,
  ItemTemplate,
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
    [listItem?.className]
  );


  const ItemTemplateList = React.useCallback(() => {
    if (!items?.length) {
      return null
    }

    if (ItemTemplate) {
      return (
        // TODO: FIX TS contentElementTag type
        // @ts-ignore-next-line
        <TagName className={className} {...props}>
          {items.map((item) => {
            return (<ListItem><ItemTemplate {...item}/></ListItem>)
          })}
        </TagName>
      )
    }

    return null
  },[items, ItemTemplate, TagName, className, props, ListItem]);

  if (ItemTemplateList) {
    return <ItemTemplateList />
  }

  return (
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    <TagName className={className} {...props}>
      {React.Children.map(children, (child) => {
        return <ListItem>{child}</ListItem>;
      })}
    </TagName>
  );
};

export default ContentElementList;
