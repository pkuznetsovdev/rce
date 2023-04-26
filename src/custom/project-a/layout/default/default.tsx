import React from 'react';
import Test, { RCE as CE } from 'react-content-elements';
import { MyElementConfig, MyElementProps } from 'react-content-elements';
import { Header } from '../../components';

interface LayoutProps extends React.PropsWithChildren<Pick<MyElementProps<'text'>, 'modifiers'>> {
    className?: string;
    title?: MyElementConfig<'text'>;
}

export const Layout = ({modifiers = [], children, title, ...props}: LayoutProps) => {
    console.log('Layout')
    console.log('RCE: ', CE)
    console.log('Test: ', Test)
    return (
        <CE.Block {...props} modifiers={['page', ...modifiers]}>
            <CE.Block modifiers={['container']}>
                <Header />
                <CE.Text modifiers={['page-title']} config={title} />
            </CE.Block>
            <CE.Block tag='main' modifiers={['main']}>
                {children}
            </CE.Block>
        </CE.Block>
    );
};
