import React, { useContext } from 'react';
import CE from 'react-content-elements';
import { ThemeContext } from 'src/providers/theme';
import { ICONS } from '../../assets/icons';

export const StyleThemeToggler = () => {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  const iconName = theme === 'dark' ? 'Sun' : 'Moon';

  return (
    <CE.Button className='style-theme-toggler' onClick={onToggleTheme}>
      <CE.Custom CustomTemplate={ICONS[iconName]} />
    </CE.Button>
  );
};
