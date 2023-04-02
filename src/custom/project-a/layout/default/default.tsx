import React from "react";
import { CE } from "src/ce";
import { MyElementConfig, MyElementProps } from "src/ce/core/types";
import { Header } from "../../components";

interface LayoutProps
  extends React.PropsWithChildren<Pick<MyElementProps<"text">, "modifiers">> {
  className?: string;
  title?: MyElementConfig<"text">;
}

export const Layout = ({
  modifiers = [],
  children,
  title,
  ...props
}: LayoutProps) => {
  return (
    <CE.Block {...props} modifiers={["page", ...modifiers]}>
      <CE.Block modifiers={["container"]}>
        <Header />
        <CE.Text modifiers={["page-title"]} config={title} />
      </CE.Block>
      <CE.Block tag="main" modifiers={["main"]}>
        {children}
      </CE.Block>
    </CE.Block>
  );
};
