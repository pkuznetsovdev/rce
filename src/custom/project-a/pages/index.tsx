import React from "react";
import { CE } from "src/ce";
import { Layout } from "../layout/default/default";

import { useGetData } from "src/custom/project-a/data";
import { Header, TestList } from "../components";

const mainClass = "home";

const Index = () => {
  const pageData = useGetData("IndexPage");

  return (
    <>
      <Layout
        className={mainClass}
        // title="Web Content Development"
      >
        <CE.Block modifiers={["section", "container", "main"]}>
          <TestList />
        </CE.Block>
      </Layout>
    </>
  );
};

export default Index;
