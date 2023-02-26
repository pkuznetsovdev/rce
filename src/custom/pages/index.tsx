import React from "react";
import { ContentElements } from "src/content-elements";

import { useGetData } from "src/custom/data";
import { CustomComponents } from "src/custom/index";

const Index = () => {
  const pageData = useGetData("IndexPage");
  return (
    <ContentElements.Page>
      <ContentElements.Text
        modifiers={["header"]}
        tag="h3"
        // TODO WTF
        // @ts-ignore
        text={pageData.title}
      />
      <ContentElements.Text modifiers={["subheader"]}>
        Develop content, structure is done
      </ContentElements.Text>
      <ContentElements.Block modifiers={["container"]}>
        <ContentElements.Text modifiers={["title"]}>
          Title modifier
        </ContentElements.Text>
        <ContentElements.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          atque aut eaque error eum hic ipsum iste libero numquam praesentium
          quia quidem quod, quos saepe ullam ut vel! Ab cupiditate deleniti illo
          inventore laudantium necessitatibus odit quia quidem vitae voluptas.
        </ContentElements.Text>
        <ContentElements.Text modifiers={["caption"]}>
          Some text in caption
        </ContentElements.Text>
      </ContentElements.Block>
      <ContentElements.List
        className="option-card-list"
        ceList={{
          items: [], // pageData.options,
          ItemTemplate: CustomComponents.OptionCard,
        }}
      />
    </ContentElements.Page>
  );
};

export default Index;
