import React from "react";
import { ContentElements } from "src/content-elements";
import { CE } from "src/ce";

import { useGetData } from "src/custom/data";

const imgSrcByProps = 'https://image.cnbcfm.com/api/v1/image/107196235-1676617290460-_GRAND-PRIZE_WINNER_-_Karthik_Subramaniam.jpg?v=1676635561&w=740&h=416&ffmt=webp&vtcrop=y';
const imgSrcByDefault = 'https://www.popsci.com/uploads/2022/12/01/SpaceX-rocket-over-mangroves-e1670022792625.jpg?auto=webp&width=1440&height=960.48';
const imgSrcByConfig = 'https://www.frommers.com/system/media_items/attachments/000/866/196/s980/p264_cp.jpg?1602185431';


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
            <CE.Image
                modifiers={["by-config"]}
                src={imgSrcByProps}
                config={{
                  src: imgSrcByConfig,
                }}
            />
          </li>
          <li>
            <CE.Text
              modifiers={["subtitle"]}
              tag="span"
              text="content by prop"
              config="content by default value"
            />
            <CE.Image
                modifiers={["by-default"]}
                config={imgSrcByDefault}
                src={imgSrcByProps}
            />
          </li>
          <li>
            <CE.Text modifiers={["subtitle"]} text="content by prop">
              Content by children
            </CE.Text>
            <CE.Image
                modifiers={["by-prop"]}
                src={imgSrcByProps}
            />
          </li>
          <li>
            <CE.Text>Content by children</CE.Text>
          </li>
          <li>
            <span>empty block</span>
            <CE.Text />
            <CE.Image />
            <CE.Image>Content by children in image</CE.Image>
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
