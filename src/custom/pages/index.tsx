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
          text={pageData.header}
        />
        <ContentElements.Text modifiers={["subheader"]}>
          {pageData.subHeader}
        </ContentElements.Text>
      </ContentElements.Block>
      <ContentElements.Block modifiers={["container"]}>
        {pageData.textBlocks.map((textBlock, i) => (
          <>
            <ContentElements.Text
              modifiers={[i === 0 ? "section-title" : "title"]}
            >
              {textBlock.title}
            </ContentElements.Text>
            {textBlock.text && <ContentElements.Text text={textBlock.text} />}
            {textBlock.items && (
              <>
                <ContentElements.List modifiers={["disc"]}>
                  {textBlock.items}
                </ContentElements.List>
              </>
            )}

            <ContentElements.Text modifiers={["caption"]}>
              {textBlock.caption}
            </ContentElements.Text>
          </>
        ))}
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
