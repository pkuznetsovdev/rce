import React from "react";
import { CE } from "src/ce";

import { Layout } from "../../layout/default";

import { useGetData } from "src/custom/project-a/data";

const mainClass = "home";

const Template = () => {
  const pageData = useGetData("IndexPage");

  return (
    <>
      <Layout className={mainClass} title="Web Content Development">
        <CE.Block modifiers={["section", "container"]}>
          <CE.Block modifiers={["concept"]}>
            <CE.Text>
              The content data of digital pages is constantly updating. That
              might be correct for most of business projects. It includes{" "}
              <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">
                CRUD
              </a>
              operations to the loads of datasets. We use CMS to handle the{" "}
              <mark>content data management</mark>.
            </CE.Text>
            <CE.Text>
              From the developers perspective that's an abstract factory
              pattern.
              <br />
              Two of <mark>content data</mark> properties are <mark>type</mark>{" "}
              and <mark>content</mark>. We want to generate different HTML
              structures depending on the the <mark>type</mark> or{" "}
              <mark>content</mark> of each data entity.
              <br />
              We pick a framework, create reusable components, style system,
              then scale and maintain the codebase.
              <br />
              We pick trusted and known solutions.
            </CE.Text>
            <CE.Text>So what is the problem?</CE.Text>
            <CE.Text>
              We build the same <mark>HTML structures</mark> on our daily basis.
              Just like first print publishing houses.
              <br />
              We do it manually with every element. Create wrappers or reuse
              from the 3rd party lib. Style and extend them.
              <br />
              We provide the solutions.
            </CE.Text>
            <CE.Text>
              Every developer provides a custom solution for the particular
              content data element. This solution is based on general
              requirements by every project.
              <br />
              Web Content Elements is a formalized way to create low level HTML
              structures and manage style system of the entire project.
              <br />
              It's flexible enough to generate anything that is possible with
              HTML and provide styles in consistent and linear manner.
            </CE.Text>
          </CE.Block>

          {/*<CE.Text>How did you solve it before?</CE.Text>
          <CE.List
            modifiers={["disc"]}
            listData={[
              "Use UX lib or develop basic structures internally to get basic reusable structures",
              "Apply UI lib or develop style system internally to describe the outlook of the code structures",
              "Maintain the code structures and style system on a daily base",
              "Refactor it due to changed requirements",
            ]}
          />
          <CE.Text>Why bother?</CE.Text>
          <CE.List
            modifiers={["disc"]}
            listData={[
              "Custom approach for basic structures architecture by company/team/developer",
              "Custom approach for style system by company/team/developer",
              "Duplicating same patterns by project",
              "Endless refactoring to meet new requirements",
            ]}
          />*/}
        </CE.Block>
      </Layout>
    </>
  );
};

export default Template;
