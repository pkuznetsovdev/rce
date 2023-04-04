import React from "react";
import { CE } from "src/ce";

import { Layout } from "../../layout";

import { useGetData } from "src/custom/project-a/data";
import { DocsHeader } from "src/custom/project-a/components/docs-header";
import { DocsHtml } from "src/custom/project-a/components/docs-html";
import { DocsCss } from "src/custom/project-a/components/docs-css";

const mainClass = "docs";

const TABS = ["HTML", "CSS"] as const;

const TemplateByTab = {
  HTML: DocsHtml,
  CSS: DocsCss,
} as const;

const Template = () => {
  const pageData = useGetData("IndexPage");

  const [activeTabId, setActiveTabId] = React.useState<(typeof TABS)[number]>(
    () => TABS[0]
  );

  const ActiveTabTemplate = TemplateByTab[activeTabId];

  return (
    <>
      <Layout className={mainClass} title="Docs">
        <CE.Block modifiers={["container", "docs-content"]}>
          <DocsHeader />
          <CE.Block modifiers={["row"]}>
            <CE.Button
              modifiers={["docs-tab"]}
              onClick={() => setActiveTabId(TABS[0])}
            >
              HTML
            </CE.Button>
            <CE.Button
              modifiers={["docs-tab"]}
              onClick={() => setActiveTabId(TABS[1])}
            >
              CSS
            </CE.Button>
          </CE.Block>
          <CE.Divider />
          <ActiveTabTemplate />
        </CE.Block>
      </Layout>
    </>
  );
};

export default Template;
