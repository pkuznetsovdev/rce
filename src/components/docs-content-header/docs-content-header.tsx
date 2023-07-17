import React from 'react';
import CE from 'react-content-elements';

export const DocsContentHeader = () => {
  return (
    <CE.Block className='docs-content-header'>
      <CE.Text>
        Content Elements serve as the foundation for representing basic HTML structures. The development process with
        Content Elements is formalized to efficiently generate these basic structures and manage associated styles.
        <br />A basic structure refers to any HTML or CSS code generated through Content Elements.
      </CE.Text>
      <CE.Text>
        A brief walkthrough is described in the article:{' '}
        <CE.Link
          href='https://medium.com/@pkuznetsovdev/web-content-elements-e3dcc60ee980'
          target='_blank'
          rel='noopener noreferrer'
        >
          medium.com/web-content-elements
        </CE.Link>
      </CE.Text>
    </CE.Block>
  );
};
