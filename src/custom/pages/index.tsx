import React from "react";
import { ContentElements } from "src/content-elements";
import { CE } from "src/ce";

import { useGetData } from "src/custom/data";

const Index = () => {
  const pageData = useGetData("IndexPage");
  return (
    <>
      <ContentElements.Page>
        <ol>
          <li>
            <CE.Text
              modifiers={["subtitle"]}
              tag="span"
              text="content by text prop"
              config={{
                modifiers: ["title"],
                tag: "p",
                text: "content by config",
              }}
            />
          </li>
          <li>
            <CE.Text
              modifiers={["subtitle"]}
              tag="span"
              text="content by text prop"
              config="content by default value"
            />
          </li>
          <li>
            <CE.Text modifiers={["subtitle"]} text="content by text prop">
              Content by children
            </CE.Text>
          </li>
          <li>
            <CE.Text>Content by children</CE.Text>
          </li>
        </ol>

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
