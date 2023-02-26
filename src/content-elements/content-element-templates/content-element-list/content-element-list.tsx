import React, { PropsWithChildren } from "react";
import { ContentElementProps } from "../../content-element/types";

const ContentElementList = ({
  children,
  tag: TagName,
  className,
  type,
  content,
  listItem,
  modifiers,
  ceList,
  ...props
}: ContentElementProps<"ceList">) => {
  const { items, ItemTemplate } = ceList || {};
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
    return (
        // TODO: FIX TS contentElementTag type
        // @ts-ignore-next-line
        <TagName className={className} {...props}>
          {/* TODO: FIX TS
          @ts-ignore-next-line */}
          {items.map((item, i) => {
            return (
                <ListItem key={i}>
                  {/* TODO: FIX TS
                  @ts-ignore-next-line */}
                  <ItemTemplate {...item} />
                </ListItem>
            );
          })}
        </TagName>
    );
  }, [items, ItemTemplate, TagName, className, props, ListItem]);

  if (items?.length && ItemTemplate) {
    return <ItemTemplateList />;
  }

  return (
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    <TagName className={className} {...props}>
      {React.Children.map(children, (child, i) => {

        return <ListItem key={i}>{child}</ListItem>;
      })}
    </TagName>
  );
};

export default ContentElementList;
