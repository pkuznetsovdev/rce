import React from 'react';
import CE from 'react-content-elements';
import { Layout } from '../../layout';

import { CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';

const mainClass = 'home';

const Index = () => {
  return (
    <>
      {/* @ts-ignore*/}
      <Layout className={mainClass} title='What?'>
        <CE.Block modifiers={['section', 'container']}>
          <CE.Text>
            React Content Elements is a JavaScript library that enhances the development experience by providing an
            additional layer for creating HTML structures and CSS styles.
          </CE.Text>
          <CE.Text>
            With React Content Elements, you can streamline your daily development tasks with a simple, quick, and
            linear solution. Whether you're working on small projects or large-scale applications, this library offers a
            convenient toolkit for your development routine.
          </CE.Text>
          <CE.Text>
            This webpage has been developed using React Content Elements. To view the rendered output, simply navigate
            to the 'Elements' tab in your web browser's developer tools.
          </CE.Text>
          <CodeExample ex={CODE_EXAMPLES.BASIC_USAGE} />
        </CE.Block>
      </Layout>
    </>
  );
};

export default Index;
