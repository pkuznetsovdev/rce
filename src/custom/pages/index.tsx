import React, { useContext } from "react";
import { ContentElements } from "src/content-elements";
import { CE } from "src/ce";

import { useGetData } from "src/custom/data";
import { ThemeContext } from "../providers/theme";
import { DailyCardList, UsecasesList } from "../components";

const Index = () => {
  const pageData = useGetData("IndexPage");

  const { theme, onChangeAppColorTheme } = useContext(ThemeContext);

  return (
    <>
      <ContentElements.Page>
        <button
          type="button"
          onClick={() => onChangeAppColorTheme("dark")}
        >{`current mode: ${theme}`}</button>
        <CE.Text modifiers={["header", "main-header"]}>
          React Content Elements
        </CE.Text>
        <CE.Block className="content-block" modifiers={["container"]}>
          <CE.Text modifiers={["title-xs", "i"]}>MyElement usecases:</CE.Text>

          <DailyCardList />

          <UsecasesList />
        </CE.Block>
      </ContentElements.Page>
    </>
  );
};

export default Index;
