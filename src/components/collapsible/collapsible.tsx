import React from 'react';
import CE from 'react-content-elements';

type CollapsibleProps = {
  btnText?: string;
  btnTextCollapsed?: string;
  isCollapsedByDefault?: boolean;
  title?: string;
};

export const Collapsible = ({
  btnText = 'hide',
  btnTextCollapsed = 'show',
  children,
  isCollapsedByDefault = false,
  title,
}: React.PropsWithChildren<CollapsibleProps>) => {
  const [isCollapsed, setIsCollapsed] = React.useState(() => isCollapsedByDefault);

  const triggerText = btnTextCollapsed && !isCollapsed ? btnText : btnTextCollapsed;

  return (
    <CE.Block className='collapsible'>
      <CE.Block modifiers={['row', 'collapsible-header']}>
        {title && <CE.Text tag='span'>{title}</CE.Text>}
        <CE.Button
          content={triggerText}
          onClick={() => setIsCollapsed((prevState) => !prevState)}
          modifiers={['collapsible-trigger', 'b']}
        />
      </CE.Block>
      <CE.Block modifiers={['collapsible-content', isCollapsed && 'collapsed']}>{children}</CE.Block>
    </CE.Block>
  );
};
