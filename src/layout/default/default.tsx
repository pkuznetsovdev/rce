import React from 'react';
import CE from 'react-content-elements';
import { ContentElementProps } from 'react-content-elements';
import { Header } from '../../components';

interface LayoutProps extends React.PropsWithChildren<Pick<ContentElementProps<'text'>, 'modifiers'>> {
  className?: string;
  title?: string;
}

export const Layout = ({ modifiers = [], children, title, ...props }: LayoutProps) => {
  return (
    <CE.Block {...props} modifiers={['page', ...modifiers]}>
      <CE.Block modifiers={['container']}>
        <Header />
        <CE.Text modifiers={['page-title']}>{title}</CE.Text>
      </CE.Block>
      <CE.Block tag='main' modifiers={['main']}>
        {children}
      </CE.Block>
    </CE.Block>
  );
};
