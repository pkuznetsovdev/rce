export interface ListProps extends React.HTMLProps<HTMLOListElement | HTMLUListElement | HTMLDListElement> {
    myElementKey?: string;
    listData?: unknown[];
}

export interface ListItemProps extends React.HTMLProps<HTMLLIElement> {
}