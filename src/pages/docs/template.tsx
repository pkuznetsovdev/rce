import React from 'react';
import CE from 'react-content-elements';

import { Layout } from '../../layout';

import { DocsContentHeader } from 'src/components/docs-content-header';
import { DocsHtml } from 'src/components/docs-html';
import { DocsCss } from 'src/components/docs-css';
import { useValueFromList } from 'src/shared';

const mainClass = 'docs';

const TABS = ['HTML', 'CSS'] as const;

const TemplateByTab = {
  HTML: DocsHtml,
  CSS: DocsCss,
} as const;

const Template = () => {
  const [activeTabId, setActiveTabId] = useValueFromList(TABS);

  const ActiveTabTemplate = React.useMemo(() => TemplateByTab[activeTabId], [activeTabId]);

  return (
    <>
      <Layout className={mainClass} title='How?'>
        <CE.Block modifiers={['container', 'docs-content']}>
          <DocsContentHeader />
          <CE.List
            modifiers={['row', 'docs-tabs']}
            // @ts-ignore
            ItemTemplate={({ tab }: { tab: (typeof TABS)[number] }) => {
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
