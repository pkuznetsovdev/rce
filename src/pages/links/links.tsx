import React from 'react';
import CE from 'react-content-elements';

import { Layout } from 'src/layout';

const mainClass = 'usecases';


const LINKS_DATA = [
  {
    title: 'NPM package',
    href: 'https://www.npmjs.com/package/react-content-elements',
  },
  {
    title: 'Github',
    href: 'https://github.com/pkuznetsovdev/react-content-elements',
  },
  // {
  //   title: 'Medium article',
  //   href: 'https://github.com/pkuznetsovdev/react-content-elements',
  // },
  // {
  //   title: 'Habr article',
  //   href: 'https://github.com/pkuznetsovdev/react-content-elements',
  // },
]
const Links = () => {
  return (
    <Layout className={mainClass} title='Links'>
      <CE.Block modifiers={['section', 'container']}>
        {LINKS_DATA.map(({ href, title }) => (
          <CE.Link key={href} href={href} target="_blank" rel="noopener noreferrer">{title}</CE.Link>
          ))}
      </CE.Block>
    </Layout>
  );
};

export default Links;