import React from "react";
import { ListItemProps, ListProps } from "./types";
import { WithMyTemplateElementProps } from "../../types";
import { BASE_CLASSNAME } from "../../constants";
import { SHARED_UTILS } from "src/shared";

export const List = ({
  children,
  tag: TagName,
  text,
  myElementKey,
  listData,
  ...props
}: ListProps & WithMyTemplateElementProps) => {
  const elementKeyByListProps = myElementKey || "id";

  if (listData && React.Children.only(children)) {
    return (
      <TagName {...props}>
        {listData.map((listItemData, idx) => {
          const elementKeyValue = listItemData.id || idx;

          return (
            <ListItem
              key={elementKeyValue}
              className={SHARED_UTILS.getClassNames(
                BASE_CLASSNAME,
                `${BASE_CLASSNAME}-item`
              )}
            >
              {/*{child}*/}
              {React.cloneElement(children, {
                itemIndex: idx,
                itemData: listItemData,
              })}
            </ListItem>
          );
        })}
      </TagName>
    );
  }

  return (
    // TODO: FAQ contentElementTag type
    // @ts-ignore-next-line
    <TagName {...props}>
      {React.Children.map(children, (child, idx) => {
        // TODO: FAQ How to fix
        // @ts-ignore-next-line
        const elementKeyValue = child?.props[elementKeyByListProps] || idx;

        if (!child) {
          return null;
        }

        return (
          <ListItem
            key={elementKeyValue}
            className={SHARED_UTILS.getClassNames(
              BASE_CLASSNAME,
              `${BASE_CLASSNAME}-item`
            )}
          >
            {/*{child}*/}
            {React.cloneElement(child, {
              itemIndex: idx,
              itemData: listData ? listData[idx] : undefined,
            })}
          </ListItem>
        );
      })}
    </TagName>
  );
};

export const ListItem = ({ children, ...props }: ListItemProps) => {
  return <li {...props}>{children}</li>;
};
