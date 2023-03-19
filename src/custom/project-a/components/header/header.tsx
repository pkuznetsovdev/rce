import React, { useContext } from "react";
import { CE } from "src/ce";
import { MyElementConfigProps, MyElementModifiers } from "src/ce/core/types";
import { NavList } from "../nav-list";
import { ThemeContext } from "src/custom/providers/theme";

interface HeaderProps {
  title?: MyElementConfigProps<"text">;
  modifiers?: MyElementModifiers<"text">;
}

const mainClass = "header";

export const Header = ({ modifiers = [] }: HeaderProps) => {
  const { theme, onChangeAppColorTheme } = useContext(ThemeContext);

  // @ts-ignore
  return (
    <>
      <CE.Block
        className={mainClass}
        modifiers={["row-above-md", ...modifiers]}
      >
        <CE.Text modifiers={["header-logo"]}>React Content Elements</CE.Text>
        <CE.Block modifiers={["header-controls", "row"]}>
          <NavList />
          <button
            className="ce ce-button"
            type="button"
            onClick={() => onChangeAppColorTheme("dark")}
          >{`current mode: ${theme}`}</button>
        </CE.Block>
      </CE.Block>
    </>
  );
};
