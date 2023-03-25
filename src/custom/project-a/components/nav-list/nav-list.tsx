import React from "react";
import { CE } from "src/ce";
import { MyElementConfigProps } from "src/ce/core/types";
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
      listData={navLinks}
      listItemTemplate={ListItemTemplate}
    />
  );
};

function ListItemTemplate(props: NavLinkProps) {
  const { itemIndex, ...navLinkProps } = props;

  return <CE.Link {...navLinkProps} />;
}
