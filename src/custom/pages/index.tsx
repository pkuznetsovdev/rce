import React from "react";
import { ContentElements } from "src/content-elements";
import { CE } from "src/ce";

import { useGetData } from "src/custom/data";

const Index = () => {
  const pageData = useGetData("IndexPage");
  return (
    <>
      <ContentElements.Page>
        <ul>
          <li>
            <mark>by default value</mark>
            <CE.Text config="content" modifiers={["header"]} />
          </li>
          <li>
            <mark>by config value</mark>
            <CE.Text config={{ text: "content" }} />
          </li>
          <li>
            <mark>by children</mark>
            <CE.Text>content</CE.Text>
          </li>
          <li>
            <mark>no content, no children</mark>
            <CE.Text />
          </li>
        </ul>

        {/*<ContentElements.Block modifiers={["container"]}>*/}
        {/*    <ContentElements.Text*/}
        {/*        modifiers={["header"]}*/}
        {/*        tag="h3"*/}
        {/*        content={pageData.header}*/}
        {/*    />*/}
        {/*</ContentElements.Block>*/}
        {/*<ContentElements.List*/}
        {/*    className="option-card-list"*/}
        {/*    ceList={{*/}
        {/*        items: [], // pageData.options,*/}
        {/*        ItemTemplate: CustomComponents.OptionCard, // ts should fail if expected props differ from typeof items[number]*/}
        {/*    }}*/}
        {/*/>*/}
      </ContentElements.Page>
    </>
  );
};

export default Index;
