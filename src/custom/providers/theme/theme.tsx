import React, {
  createContext,
  useState,
  useCallback,
  useLayoutEffect,
  useRef,
} from "react";
import { applyTheme, getCurrentTheme } from "./utils";
import { AppColorTheme } from "./constants";

export const ThemeContext = createContext({
  theme: "default",
  onChangeAppColorTheme: (t: AppColorTheme) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, _setCurrentTheme] = useState<AppColorTheme>(
    () => "default"
  );
  const isMountedRef = useRef(false);

  const onChangeAppColorTheme = useCallback((newTheme?: AppColorTheme) => {
    _setCurrentTheme((currentTheme) => applyTheme(newTheme, currentTheme));
  }, []);

  useLayoutEffect(() => {
    const isDarkThemeByBrowser = getCurrentTheme();

    if (isDarkThemeByBrowser && !isMountedRef.current) {
      isMountedRef.current = true;
      onChangeAppColorTheme("dark");
    }
  });

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, onChangeAppColorTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
