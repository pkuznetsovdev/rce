import React from 'react';
import { ListItemProps, ListProps } from './types';
import { WithMyTemplateElementProps } from '../../types';
import { BASE_CLASSNAME } from '../../constants';
import { SHARED_UTILS } from '../../../utils';

export const List = ({
  children,
  tag: TagName,
  text,
  myElementKey,
  content,
  listItemTemplate: ItemTemplate,
  ...props
}: WithMyTemplateElementProps & ListProps) => {
  const elementKeyByListProps = myElementKey || 'id';

  if (content && typeof content[0] === 'string' && !ItemTemplate) {
    return (
      <TagName {...props}>
        {content.map((listItemText, idx) => {
          return <ListItem key={idx} dangerouslySetInnerHTML={{ __html: listItemText }} />;
        })}
      </TagName>
    );
  }

  if (content && ItemTemplate) {
    return (
      <TagName {...props}>
        {content.map((listItemData, idx) => {
          const elementKeyValue = listItemData.id || idx;

          return (
            <ListItem key={elementKeyValue}>
              <ItemTemplate {...{ ...listItemData, itemIndex: idx }} />
            </ListItem>
          );
        })}
      </TagName>
    );
  }

  if (content && React.Children.only(children)) {
    return (
      <TagName {...props}>
        {content.map((listItemData, idx) => {
          const elementKeyValue = listItemData.id || idx;

          return (
            <ListItem key={elementKeyValue}>
              {/*{child}*/}
              {React.cloneElement(children, {
                itemIndex: idx,
                ...listItemData,
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
          <ListItem key={elementKeyValue}>
            {/*{child}*/}
            {React.cloneElement(child, {
              itemIndex: idx,
              ...(content && content[idx] ? content[idx] : {}),
            })}
          </ListItem>
        );
      })}
    </TagName>
  );
};

export const ListItem = ({ children, ...props }: ListItemProps) => {
  return (
    <li className={SHARED_UTILS.getClassNames(BASE_CLASSNAME, `${BASE_CLASSNAME}-item`)} {...props}>
      {children}
    </li>
  );
};
