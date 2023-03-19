import React from "react";

export interface ListProps<ItemProps extends unknown = {}> extends React.HTMLProps<HTMLOListElement | HTMLUListElement | HTMLDListElement> {
    myElementKey?: string;
    listData: ItemProps[];
    listItemTemplate?: React.FC<React.PropsWithChildren<ItemProps>>;
}

export interface ListItemProps extends React.HTMLProps<HTMLLIElement> {
}