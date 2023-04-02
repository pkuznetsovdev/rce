import React from "react";
import { CE } from "src/ce";

import { Layout } from "../../layout";

import { useGetData } from "src/custom/project-a/data";
import { CodeSnippet } from "../../components/code-snippet";

const mainClass = "docs";

const DOCS_DATA = {
  elements: [
    {
      title: "Text",
      element: <CE.Text>Text</CE.Text>,
    },
    {
      title: "Image",
      element: <CE.Text>Image</CE.Text>,
    },
    {
      title: "Block",
      element: <CE.Text>Block</CE.Text>,
    },
    {
      title: "List",
      element: <CE.Text>List</CE.Text>,
    },
    {
      title: "Link",
      element: <CE.Text>Link</CE.Text>,
    },
  ],
};

const Template = () => {
  const pageData = useGetData("IndexPage");

  return (
    <>
      <Layout className={mainClass} title="Docs">
        <CE.Block modifiers={["container"]}>
          <CE.Block modifiers={["content"]}>
            <CE.Text>
              Content Elemements have 3 main properties:
              <br />- modifiers
              <br />- tag
              <br />- config
            </CE.Text>
            <CE.Text>Modifiers</CE.Text>
            <CE.Text>
              By modifiers you adjust styles or behavoiur of the Content
              Element. Modifiers is an array of strings.
            </CE.Text>
            <CE.Text>Tag</CE.Text>
            <CE.Text>
              The value of the property represents tag name that will be used
              for the HTML element in DOM.
            </CE.Text>
            <CE.Text>Config</CE.Text>
            <CE.Text>
              By config you provide content data and adjust bahaviour of the
              Content Element.
            </CE.Text>
            <CE.Text>Content elements</CE.Text>
            <CE.Text>Text</CE.Text>
            <CE.Text>
              The `text` Content Element represents a text node in HTML.
              <hr />
              <CodeSnippet>{`<CE.Text>Text Content Element</CE.Text>`}</CodeSnippet>
              <CE.Text>Result:</CE.Text>
              <CE.Text>Text Content Element</CE.Text>
              <hr />
              <CodeSnippet>{`<CE.Text config="Text Content Element" />`}</CodeSnippet>
              <CE.Text>Result:</CE.Text>
              <CE.Text config="Text Content Element" />
              <hr />
              <CodeSnippet>{`<CE.Text text="Text Content Element" />`}</CodeSnippet>
              <CE.Text>Result:</CE.Text>
              <CE.Text text="Text Content Element" />
            </CE.Text>
          </CE.Block>
        </CE.Block>
      </Layout>
    </>
  );
};

export default Template;
