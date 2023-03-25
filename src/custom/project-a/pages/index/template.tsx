import React from "react";
import { CE } from "src/ce";

import { Layout } from "../../layout";

import { useGetData } from "src/custom/project-a/data";

const mainClass = "home";

const Template = () => {
  const pageData = useGetData("IndexPage");

  return (
    <>
      <Layout className={mainClass} title="Home page">
        {/*<CE.Text modifiers={['header']}>Home page</CE.Text>*/}
      </Layout>
    </>
  );
};

export default Template;
