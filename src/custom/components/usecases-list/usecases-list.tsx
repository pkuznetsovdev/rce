import React from "react";
import { CE } from "src/ce";
import { BREAKPOINT_NAMES } from "src/ce/core/constants";
import { getBpValue } from "src/ce/core/utils";

const imgSrcByProps =
  "https://image.cnbcfm.com/api/v1/image/107196235-1676617290460-_GRAND-PRIZE_WINNER_-_Karthik_Subramaniam.jpg?ffmt=webp";
const imgSrcByDefault =
  "https://www.popsci.com/uploads/2022/12/01/SpaceX-rocket-over-mangroves-e1670022792625.jpg?auto=webp";
const imgSrcByConfig =
  "https://www.frommers.com/system/media_items/attachments/000/866/196/s980/p264_cp.jpg";
const imgSrcBySrcSet =
  "https://nypost.com/wp-content/uploads/sites/2/2022/12/national-geographic-pictures-of-the-year-24.jpg?quality=90&strip=all";

const imageSrcSet = BREAKPOINT_NAMES.reduce((res, name) => {
  return {
    ...res,
    [name]: `https://dummyimage.com/${getBpValue(name)}`,
  };
}, {});

export const UsecasesList = () => {
  return (
    <CE.List className="usecases" modifiers={["grid"]}>
      <>
        <CE.Text>Content by children(image: srcSet)</CE.Text>
        <CE.Image
          modifiers={["content-by-config"]}
          src={imgSrcByProps}
          config={{
            src: imgSrcByConfig,
            srcSet: imageSrcSet,
          }}
        />
      </>
      <>
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
          modifiers={["content-by-config"]}
          src={imgSrcByProps}
          config={{
            src: imgSrcByConfig,
          }}
        />
      </>
      <>
        <CE.Text
          modifiers={["subtitle"]}
          tag="span"
          text="content by prop"
          config="content by default value"
        />
        <CE.Text>
          Element affected be <i>nextByName</i> mixin
        </CE.Text>
        <CE.Image
          modifiers={["by-default"]}
          config={imgSrcByDefault}
          src={imgSrcByProps}
        />
      </>
      <>
        <CE.Text modifiers={["subtitle"]} text="content by prop">
          Content by children
        </CE.Text>
        <CE.Image modifiers={["by-prop"]} src={imgSrcByProps} />
      </>
      <>
        <span>empty block Start</span>
        <CE.Text />
        <CE.Image />
        <CE.Image>Content by children in image</CE.Image>
        <span>empty block End</span>
      </>
    </CE.List>
  );
};
