import React from "react";
import { CE } from "react-content-elements";
import { MyElementConfigProps } from "react-content-elements";
import { NavLink, NavLinkProps } from "react-router-dom";
import { APP_PATHS } from "src/custom/project-a/router";

interface HeaderProps extends MyElementConfigProps<"list"> {
  // navLinks: Array<NavLinkProps>;
}

const mainClass = "nav-list";

const navLinks = Object.entries(APP_PATHS).map(([k, { route, title }]) => {
  return { to: route, title };
});

export const NavList = ({ modifiers = [] }: HeaderProps) => {
  return (
    <CE.List
      className={mainClass}
      modifiers={["row", ...modifiers]}
      content={navLinks}
      listItemTemplate={ListItemTemplate}
    />
  );
};

function ListItemTemplate(props: NavLinkProps) {
  const { itemIndex, ...navLinkProps } = props;

  return <CE.Link {...navLinkProps} />;
}
