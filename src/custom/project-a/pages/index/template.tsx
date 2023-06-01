import React from 'react';
import { CE } from 'react-content-elements';
import { Layout } from '../../layout';

import { useGetData } from 'src/custom/project-a/data';
import { CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';

const mainClass = 'home';

const Index = () => {
  const pageData = useGetData('IndexPage');

  return (
    <>
      {/* @ts-ignore*/}
      <Layout className={mainClass} title='What?'>
        <CE.Block modifiers={['section', 'container']}>
          <CE.Text>React Content Elements is another JavaScript Library.</CE.Text>
          <CE.Text>
            It is designed to provide another level of HTML(structure) and CSS(styles) development experience.
          </CE.Text>
          <CE.Text>Simple, quick and linear solution for all of your daily base development routine.</CE.Text>
          <CE.Text>
            Following webpage is created within the RCE library. The result is available in 'Elements' tab via developer
            tools.
          </CE.Text>
        </CE.Block>
        <CodeExample ex={CODE_EXAMPLES.BASIC_USAGE} />
      </Layout>
    </>
  );
};

export default Index;
