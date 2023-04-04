import React from "react";
import { CE } from "src/ce";
import { MyElementConfigProps } from "src/ce/core/types";

export interface DailyCardProps extends React.PropsWithChildren {
  itemIndex?: number;
  image?: MyElementConfigProps<"image">;
  title?: MyElementConfigProps<"text">;
}

export const DocsHeader = ({ image, title }: DailyCardProps) => {
  return (
    <CE.Block className="docs-header">
      <CE.Text>
        <mark>Content Elements</mark> represent basic HTML structures.
        <br />
        Development process with <mark>Content Elements</mark> is formalized in
        terms of generating basic structures(HTML) and styles(CSS).
        <br />
        Basic structure is any piece of HTML or/and CSS that is generated via{" "}
        <mark>Content Elements</mark>.
      </CE.Text>
      <CE.Text
        modifiers={["list-title"]}
        content="Let’s clarify a set of dependencies for the web content development flow:"
      />
      <CE.List
        modifiers={["disc"]}
        content={[
          "HTML (set of basic structures instead of manual code duplications)",
          "CSS (simple and scalable style system, less dependent on HTML structure)",
          "SEO (tag name, aria-attributes, e.t.c. - simple adjustment in one click)",
        ]}
      ></CE.List>
    </CE.Block>
  );
};
