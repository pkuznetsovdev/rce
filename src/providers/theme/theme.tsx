import React, { createContext, useState, useCallback, useLayoutEffect, useRef } from 'react';
import { applyTheme, getCurrentTheme } from './utils';
import { AppColorTheme } from './constants';

interface ThemeContextModel {
  theme: 'default' | 'dark';
  onChangeAppColorTheme: (t: AppColorTheme) => void;
  onToggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextModel>({
  theme: 'default',
  onChangeAppColorTheme: (newTheme: AppColorTheme) => {},
  onToggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, _setCurrentTheme] = useState<AppColorTheme>(() => 'default');
  const isMountedRef = useRef(false);

  const onChangeAppColorTheme = useCallback((newTheme?: AppColorTheme) => {
    _setCurrentTheme((currentTheme) => applyTheme(newTheme, currentTheme));
  }, []);

  const onToggleTheme = useCallback(() => {
    _setCurrentTheme((currentTheme) => {
      const newTheme = currentTheme === 'dark' ? 'default' : 'dark';
      applyTheme(newTheme, currentTheme);
      return newTheme;
    });
  }, []);

  useLayoutEffect(() => {
    const isDarkThemeByBrowser = getCurrentTheme();

    if (isDarkThemeByBrowser && !isMountedRef.current) {
      isMountedRef.current = true;
      onChangeAppColorTheme('dark');
    }
  });

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, onChangeAppColorTheme, onToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
