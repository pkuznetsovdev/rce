import React from 'react';
import './styles/index.scss';
import Router from './router/router';
import { AppProvider } from './providers';
import CE from 'react-content-elements';

const TAG_BY_ELEMENT_MODIFIER = {
  header: 'h1',
  section: 'section',
  title: 'h3',
  subtitle: 'h5',
  ol: 'ol',
} as const;

CE.setup({
  tags: {
    byModifier: TAG_BY_ELEMENT_MODIFIER,
  },
});
function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
