import React, { ReactElement } from 'react';
import { CE } from 'react-content-elements';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { SHARED_UTILS } from 'src/shared';

type DisplayNameByIdMap = {
  [CEKey in Lowercase<keyof typeof CE>]: `CE.${Capitalize<CEKey>}`;
};

const DISPLAY_NAME_BY_ID = Object.keys(CE).reduce(
  (r, k) => ({
    ...r,
    [k.toLowerCase()]: `CE.${SHARED_UTILS.capitalize(k)}`,
  }),
  {},
) as DisplayNameByIdMap;

type DisplayNameById = typeof DISPLAY_NAME_BY_ID;
type DisplayNameIds = Array<keyof DisplayNameById>;

type CodeExampleProps = { ex: CodeExampleTemplateProps | Array<CodeExampleTemplateProps> };

export const CodeExample = ({ ex }: CodeExampleProps) => {
  if (Array.isArray(ex)) {
    return (
      <CE.List modifiers={['code-examples']}>
        {ex.map((example) => (
          <CodeExampleTemplate key={example.el.toString()} {...example} />
        ))}
      </CE.List>
    );
  }

  return <CodeExampleTemplate key={ex.el.toString()} {...ex} />;
};

type CodeExampleTemplateProps = { el: ReactElement; id?: number | string; displayNameId: DisplayNameIds[number] };

export type CodeExampleTemplate = CodeExampleTemplateProps;

const CodeExampleTemplate = ({ el, id, displayNameId }: CodeExampleTemplateProps) => {
  console.log('displayNameId: ', displayNameId);
  return (
    <CE.Block modifiers={['code-example']}>
      <CE.Text>
        <code>{reactElementToJSXString(el, { displayName: () => DISPLAY_NAME_BY_ID[displayNameId] })}</code>
      </CE.Text>
      <CE.Text modifiers={['i', 'sm']}>Result:</CE.Text>
      {el}
    </CE.Block>
  );
};
