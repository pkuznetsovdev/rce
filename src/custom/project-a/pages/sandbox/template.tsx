import React from 'react';
import CE from 'react-content-elements';

import { Layout } from '../../layout';

import { useGetData } from 'src/custom/project-a/data';

const mainClass = 'sandbox';

const Template = () => {
  const pageData = useGetData('IndexPage');

  return (
    <Layout className={mainClass} title='Sandbox'>
      <CE.Block modifiers={['container']}>
        <iframe
          src='https://codesandbox.io/embed/dazzling-kowalevski-bvolky?fontsize=14&hidenavigation=1&theme=dark'
          style={{
            width: '100%',
            height: '100%',
            border: 0,
            borderRadius: '4px',
            overflow: 'hidden',
            minHeight: '70vh',
          }}
          title='rce-sandbox'
          allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
          sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
        />
      </CE.Block>
    </Layout>
  );
};

export default Template;
