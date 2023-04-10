import { APP_COLOR_THEMES, AppColorTheme } from './constants';
import { useEffect, useState } from 'react';

export const applyTheme = (newTheme?: AppColorTheme, prevTheme?: AppColorTheme) => {
  if (!newTheme || !APP_COLOR_THEMES.includes(newTheme)) {
    prevTheme && removeTheme(prevTheme);
    return 'default';
  }

  if (newTheme === 'default' && prevTheme === newTheme) {
    return 'default';
  }

  if (prevTheme === newTheme) {
    removeTheme(prevTheme);
    return 'default';
  }

  prevTheme && removeTheme(prevTheme);

  if (newTheme !== 'default') {
    addTheme(newTheme);
  }

  return newTheme;
};

const getClassByTheme = (theme: AppColorTheme) => `${theme}-theme`;

function removeTheme(theme: AppColorTheme) {
  document.body.classList.remove(getClassByTheme(theme));
}

function addTheme(theme: AppColorTheme) {
  document.body.classList.add(getClassByTheme(theme));
}

export function useGetBrowserThemeDetector() {
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e: { matches: boolean | ((prevState: boolean) => boolean) }) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);

  return isDarkTheme;
}
export function getCurrentTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
