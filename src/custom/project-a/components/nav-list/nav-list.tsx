import React from 'react';
import { CE } from 'react-content-elements';
import { ContentElementConfigProps } from 'react-content-elements';
import { APP_PATHS } from 'src/custom/project-a/router';
import { useLocation } from 'react-router-dom';

type HeaderProps = ContentElementConfigProps<'list'>;

const mainClass = 'nav-list';

const navLinks = Object.entries(APP_PATHS).map(([k, { route, title }]) => {
  return { href: `/#${route}`, title };
});

export const NavList = ({ modifiers = [] }: HeaderProps) => {
  return (
    <CE.List
      className={mainClass}
      modifiers={['row', ...modifiers]}
      content={navLinks}
      listItemTemplate={ListItemTemplate}
    />
  );
};

function ListItemTemplate(props: ContentElementConfigProps<'link'>) {
  const location = useLocation();
  const { itemIndex, ...linkProps } = props;

  console.log(location);

  return <CE.Link {...linkProps} modifiers={[`/#${location.pathname}` === linkProps.href && 'active']} />;
}
