import React from 'react';
import CE from 'react-content-elements';

export type CodeExampleProps = Pick<HTMLImageElement, 'src'>;

export const CodeExampleImage = ({ src }: CodeExampleProps) => {
  return <CE.Image src={src} className='code-example' />;
};
