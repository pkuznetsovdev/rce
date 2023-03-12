import React, { useContext } from "react";
import { ContentElements } from "src/content-elements";
import { CE } from "src/ce";

import { useGetData } from "src/custom/data";
import { ThemeContext } from "../providers/theme";
import { UsecasesList } from "../components";

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
        <CE.Block className="content-block" modifiers={["container"]}>
          <CE.Text modifiers={["title-xs", "i"]}>MyElement usecases:</CE.Text>
          <UsecasesList />

          {/*
         <ContentElements.Block modifiers={["container"]}>
              <ContentElements.Text
                  modifiers={["header"]}
                  tag="h3"
                  content={pageData.header}
              />
          </ContentElements.Block>
          <ContentElements.List
              className="option-card-list"
              ceList={{
                  items: [], // pageData.options,
                  ItemTemplate: CustomComponents.OptionCard, // ts should fail if expected props differ from typeof items[number]
              }}
          />
          */}
        </CE.Block>
      </ContentElements.Page>
    </>
  );
};

export default Index;
