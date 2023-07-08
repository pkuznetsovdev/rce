import React from 'react';
import './custom/project-a/styles/index.scss';
import Router from './custom/project-a/router/router';
import { CustomProviders } from 'src/custom';
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
    <CustomProviders.AppProvider>
      <Router />
    </CustomProviders.AppProvider>
  );
}

export default App;
