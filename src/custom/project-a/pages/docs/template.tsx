import React from "react";
import { CE } from "src/ce";

import { Layout } from "../../layout";

import { useGetData } from "src/custom/project-a/data";

const mainClass = "docs";

const Template = () => {
  const pageData = useGetData("IndexPage");

  return (
    <>
      <Layout className={mainClass} title="Docs"></Layout>
    </>
  );
};

export default Template;
