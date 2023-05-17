import React from 'react';
import Test, { CE } from 'react-content-elements';
import { ContentElementConfig, ContentElementProps } from 'react-content-elements';
import { Header } from '../../components';

interface LayoutProps extends React.PropsWithChildren<Pick<ContentElementProps<'text'>, 'modifiers'>> {
  className?: string;
  title?: ContentElementConfig<'text'>;
}

export const Layout = ({ modifiers = [], children, title, ...props }: LayoutProps) => {
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
