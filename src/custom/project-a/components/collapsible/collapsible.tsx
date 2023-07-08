import React from 'react';
import CE from 'react-content-elements';

type CollapsibleProps = { btnText: string; btnTextCollapsed?: string; isCollapsedByDefault?: boolean };

export const Collapsible = ({
  btnText,
  btnTextCollapsed,
  children,
  isCollapsedByDefault = false,
}: React.PropsWithChildren<CollapsibleProps>) => {
  const [isCollapsed, setIsCollapsed] = React.useState(() => isCollapsedByDefault);

  const triggerText = btnTextCollapsed && !isCollapsed ? btnTextCollapsed : btnText;

  return (
    <CE.Block className='collapsible'>
      <CE.Button
        content={triggerText}
        onClick={() => setIsCollapsed((prevState) => !prevState)}
        modifiers={['collapsible-trigger', 'b']}
      />
      <CE.Block modifiers={['collapsible-content', isCollapsed && 'collapsed']}>{children}</CE.Block>
    </CE.Block>
  );
};
