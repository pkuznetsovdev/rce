import React from 'react';
import { CE } from 'react-content-elements';

import { Layout } from '../../layout';

import { useGetData } from 'src/custom/project-a/data';
import { DocsContentHeader } from 'src/custom/project-a/components/docs-content-header';
import { DocsHtml } from 'src/custom/project-a/components/docs-html';
import { DocsCss } from 'src/custom/project-a/components/docs-css';
import { useValueFromList } from 'src/shared';

const mainClass = 'docs';

const TABS = ['HTML', 'CSS'] as const;

const TemplateByTab = {
  HTML: DocsHtml,
  CSS: DocsCss,
} as const;

const Template = () => {
  const pageData = useGetData('IndexPage');

  const [activeTabId, setActiveTabId] = useValueFromList(TABS);

  const ActiveTabTemplate = React.useMemo(() => TemplateByTab[activeTabId], [activeTabId]);

  return (
    <>
      <Layout className={mainClass} title='Docs'>
        <CE.Block modifiers={['container', 'docs-content']}>
          <DocsContentHeader />
          <CE.List
            modifiers={['row', 'docs-tabs']}
            listItemTemplate={({ tab }: { tab: (typeof TABS)[number] }) => {
              return (
                <CE.Button
                  modifiers={['docs-tab', activeTabId === tab && 'active']}
                  onClick={() => setActiveTabId(tab)}
                >
                  {tab}
                </CE.Button>
              );
            }}
            content={TABS.map((tab) => ({ tab }))}
          />
          <CE.Divider />
          <ActiveTabTemplate />
        </CE.Block>
      </Layout>
    </>
  );
};

export default Template;