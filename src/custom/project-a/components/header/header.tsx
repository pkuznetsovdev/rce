import React from "react";
import { CE } from "react-content-elements";
import { MyElementConfigProps, MyElementModifiers } from "react-content-elements";
import { NavList } from "../nav-list";
import { StyleThemeToggler } from "../style-theme-toggler";

interface HeaderProps {
  title?: MyElementConfigProps<"text">;
  modifiers?: MyElementModifiers<"text">;
}

const mainClass = "header";

export const Header = ({ modifiers = [] }: HeaderProps) => {
  return (
    <>
      <CE.Block
        className={mainClass}
        modifiers={["row-above-md", ...modifiers]}
      >
        <CE.Block modifiers={["logo"]}>
          <CE.Text modifiers={["title"]}>React Content Elements</CE.Text>
          <CE.Text modifiers={["text"]}>Your first Web Content factory</CE.Text>
        </CE.Block>
        <CE.Block modifiers={["controls", "row"]}>
          <NavList />
          <StyleThemeToggler />
        </CE.Block>
      </CE.Block>
    </>
  );
};
