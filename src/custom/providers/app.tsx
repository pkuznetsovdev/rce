import React from 'react';
import { ThemeProvider } from './theme';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default AppProvider;
