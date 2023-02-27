import React from "react";
import { ContentElements } from "src/content-elements";

import { useGetData } from "src/custom/data";

const Index = () => {
  const pageData = useGetData("IndexPage");
  return (
    <ContentElements.Page>
      <ContentElements.Block modifiers={["container"]}>
        <ContentElements.Text
          modifiers={["header"]}
          tag="h3"
          content={pageData.header}
        />
      </ContentElements.Block>
      {/*<ContentElements.List*/}
      {/*    className="option-card-list"*/}
      {/*    ceList={{*/}
      {/*        items: [], // pageData.options,*/}
      {/*        ItemTemplate: CustomComponents.OptionCard, // ts should fail if expected props differ from typeof items[number]*/}
      {/*    }}*/}
      {/*/>*/}
    </ContentElements.Page>
  );
};

export default Index;
