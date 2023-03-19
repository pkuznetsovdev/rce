import React from "react";
import { CE } from "src/ce";
import { Layout } from "../layout/default/default";

import { useGetData } from "src/custom/project-a/data";

const mainClass = "home";

const Index = () => {
  const pageData = useGetData("IndexPage");

  return (
    <>
      <Layout className={mainClass} title="Web Content Development">
        <CE.Block modifiers={["section", "container"]}>
          <CE.Text>
            React Content Elements - your first Web Content factory
          </CE.Text>

          <CE.Text>
            <b>Web Content Development</b> is appliance of your content data to
            the digital pageIt stands for CRUD operations with the content data
            of the page
          </CE.Text>

          <CE.Text>How did you solve it before?</CE.Text>
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
          />
        </CE.Block>
        </CE.Block>
      </Layout>
    </>
  );
};

export default Index;
