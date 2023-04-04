import React from "react";
import { CE } from "src/ce";
import { MyElementConfigProps } from "src/ce/core/types";
import { CodeExample } from "../code-example";
import ImageByName from "../../assets/Screenshot 2023-04-02 at 15.23.46.png";
import ImageByModifier from "../../assets/Screenshot 2023-04-02 at 15.23.55.png";
import ImageWithModifier from "../../assets/Screenshot 2023-04-02 at 15.24.06.png";
import ImageOtherModifiers from "../../assets/Screenshot 2023-04-02 at 15.24.12.png";

export interface DailyCardProps extends React.PropsWithChildren {
  itemIndex?: number;
  image?: MyElementConfigProps<"image">;
  title?: MyElementConfigProps<"text">;
}

export const DocsCss = ({ image, title }: DailyCardProps) => {
  return (
    <CE.Block className="docs-html">
      <CE.Text>Base Content Element class name is:</CE.Text>
      <CE.Text
        modifiers={["with-disc"]}
        content={["<code>ce ce-[name]</code>"]}
      />
      <CE.Text>
        Modifiers extend the base Content Element class name with following
        pattern:{" "}
      </CE.Text>
      <CE.Text
        modifiers={["with-disc"]}
        content={[
          "<code>ce ce-[name] ce--[modifier] ce--[another-modifier]</code>",
        ]}
      />

      <CE.Text
        content={[
          "Styles are applied to the *Content Elements* via mixins.",
          "Most used are following:",
        ]}
      />
      <CE.Text modifiers={["title"]}>@byName</CE.Text>
      <CodeExample src={ImageByName} />

      <CE.Text modifiers={["title"]}>@byModifier</CE.Text>
      <CodeExample src={ImageByModifier} />

      <CE.Text modifiers={["title"]}>@withModifier</CE.Text>
      <CodeExample src={ImageWithModifier} />

      <CE.Text modifiers={["list-title"]}>
        <mark>Additional mixins:</mark>
      </CE.Text>
      <CE.List
        modifiers={["disc"]}
        content={["nextByName", "nextByModifier"]}
      />
      <CodeExample src={ImageOtherModifiers} />
    </CE.Block>
  );
};
