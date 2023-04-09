import React from "react";
import { CE } from "react-content-elements";
import { Layout } from "../../layout";

import { useGetData } from "src/custom/project-a/data";

const mainClass = "home";

const Template = () => {
  const pageData = useGetData("IndexPage");

  return (
    <>
      <Layout className={mainClass} title="What?">
        {/*<CE.Block modifiers={["section", "container"]}>
          <CE.Text>
            React Content Elements is another JavaScript Library.
          </CE.Text>
          <CE.Text>
            It is designed to provide another level of development experience.
          </CE.Text>
          <CE.Text>
            It handles your HTML and CSS development routine as jQuery does with
            JavaScript.
          </CE.Text>
          <CE.Text>
            Simple, quick and linear solution for all of your daily base
            development routine.
          </CE.Text>
          <CE.Text>
            Following webpage is created within the RCE library. The result is
            available in 'Elements' tab via developer tools.
          </CE.Text>
        </CE.Block>*/}
      </Layout>
    </>
  );
};

export default Template;
