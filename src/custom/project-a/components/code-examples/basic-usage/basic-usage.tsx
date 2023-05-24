import React, { ReactElement, ReactNode } from 'react';
import { CE } from "react-content-elements";
import reactElementToJSXString from 'react-element-to-jsx-string';

const examples = [
    <CE.Text>Hello world!</CE.Text>,
    <CE.Text config="Hello world!" />,
    <CE.Text config={{ content: "Hello world!" }} />,
    <CE.Text content="Hello world!" />,
    <CE.Image src="path/to/image.jpg"/>,
    <CE.Block modifiers={["container"]}>Hello world!</CE.Block>,
]

const Example = ({e, i}: { e: ReactElement, i: number }) => {

    return (
        <CE.Block modifiers={['code-example']}>
            <CE.Text>
                <code>{reactElementToJSXString(e, { displayName: () => 'CE.Text'})}</code>
            </CE.Text>
            <CE.Text>Result:</CE.Text>
            {e}
        </CE.Block>
    )
}

export const BasicUsage = () => {
    return (
        <CE.Block modifiers={['code-example']}>
            {examples.map((e, i) => {
                return <Example e={e} i={i}/>
            })}
        </CE.Block>
    );
};
