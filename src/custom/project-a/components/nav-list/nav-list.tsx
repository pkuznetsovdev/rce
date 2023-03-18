import React from "react";
import { CE } from "src/ce";
import { MyElementConfigProps } from "src/ce/core/types";
import { NavLink, NavLinkProps } from "react-router-dom";

interface HeaderProps extends MyElementConfigProps<"list"> {
  // navLinks: Array<NavLinkProps>;
}

const mainClass = "nav-list";

const navLinks: Array<NavLinkProps> = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/usecases",
    title: "Usecases",
  },
  {
    to: "/sandbox",
    title: "Sandbox",
  },
];

export const NavList = ({ modifiers = [] }: HeaderProps) => {
  return (
    <CE.List
      className={mainClass}
      modifiers={["row", modifiers]}
      listData={navLinks}
      listItemTemplate={ListItemTemplate}
    />
  );
};

function ListItemTemplate(props: NavLinkProps) {
  const { itemIndex, ...navLinkProps } = props;

  return <NavLink {...navLinkProps}>{navLinkProps.title}</NavLink>;
}
