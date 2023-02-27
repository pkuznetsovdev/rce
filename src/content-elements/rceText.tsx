import { WithMyElement } from "./WithMyElement";
import React from "react";

export const MyElementText = WithMyElement<'text'>(({
    children,
    tag: TagName,
    className,
    content,
    ...props
}) => {
    if (content && typeof content === 'string') {
        return (
            // TODO: FIX TS contentElementTag type
            // @ts-ignore-next-line
            <TagName
                {...props}
                className={className}
                dangerouslySetInnerHTML={{__html: content}}
            />
        );
    }

    return (
        // TODO: FIX TS contentElementTag type
        // @ts-ignore-next-line
        <TagName className={className} {...props}>
            {children}
        </TagName>
    );
});