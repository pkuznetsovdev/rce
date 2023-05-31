import React from 'react';
import { CE } from 'react-content-elements';
import { CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';
import { useValueFromList } from 'src/shared';
import { DocsTag } from '../docs-tag';
import { DocsModifiers } from '../docs-modifiers';
import { DocsContent } from '../docs-content';
import { DocsConfig } from '../docs-config';
import { Collapsible } from '../collapsible';

const CE_PROPERTIES = ['Tag', 'Modifiers', 'Content', 'Config'] as const;

const TemplateByTab: Record<(typeof CE_PROPERTIES)[number], React.ElementType> = {
  Tag: DocsTag,
  Modifiers: DocsModifiers,
  Content: DocsContent,
  Config: DocsConfig,
};

export const DocsHtml = () => {
  const [activeTabId, setActiveTabId] = useValueFromList(CE_PROPERTIES);

  const ActiveTabTemplate = React.useMemo(() => TemplateByTab[activeTabId], [activeTabId]);

  return (
    <CE.Block className='docs-html'>
      <CE.Text modifiers={['list-title']}>
        All <mark>Content Elements</mark> are grouped by its role in the page:
      </CE.Text>
      <CE.List modifiers={['disc', 'i']} content={Object.keys(CE)} />
      <CE.Text modifiers={['list-title']}>
        All <mark>Content Elements</mark> have 4 special properties:
      </CE.Text>
      <CE.List modifiers={['disc', 'i']} content={CE_PROPERTIES} />
      <CE.Text modifiers={['list-title']}>
        All <mark>Content Elements</mark> have a base classname:
      </CE.Text>
      <CE.List
        modifiers={['disc']}
        content={['<i>ce ce-[name]</i><br />f.e. ‘ce ce-text’ for <mark>Text Content Element</mark>']}
      />
      {/*<CE.Text modifiers={['list-title']}>Basic usage:</CE.Text>*/}
      <Collapsible btnText='Show basic usage examples' btnTextCollapsed='Hide basic usage examples'>
        <CodeExample ex={CODE_EXAMPLES.BASIC_USAGE} />
      </Collapsible>
      <CE.Text modifiers={['title']}>
        <mark>Content Elements</mark> properties
      </CE.Text>
      <CE.List
        modifiers={['row', 'docs-tabs']}
        listItemTemplate={({ tab }: { tab: (typeof TABS)[number] }) => {
          return (
            <CE.Button
              type='button'
              modifiers={['docs-tab', activeTabId === tab && 'active', 'docs-tab-properties']}
              onClick={() => setActiveTabId(tab)}
            >
              {tab}
            </CE.Button>
          );
        }}
        content={CE_PROPERTIES.map((tab) => ({ tab }))}
      />
      <CE.Divider />
      <ActiveTabTemplate />
    </CE.Block>
  );
};
