import React from "react";
import { ContentElements } from "src/content-elements";

import { useGetData } from "src/data";
import { CustomComponents } from "src/custom";

const Index = () => {
  const pageData = useGetData("IndexPage");
  return (
    <ContentElements.Page>
      <ContentElements.Text
        modifiers={["header"]}
        tag="h3"
        text={{ rawContent: "React Content Elements", modifiers: ["test"] }}
      />
      <ContentElements.Text modifiers={["subheader"]}>
        Develop content, structure is done
      </ContentElements.Text>
      <ContentElements.List
        className="option-card-list"
        ceList={{
          items: pageData.options,
          ItemTemplate: CustomComponents.OptionCard,
        }}
      />
    </ContentElements.Page>
  );
};

export default Index;
