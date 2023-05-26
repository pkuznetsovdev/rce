import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { CE } from 'react-content-elements';
import jsxToString from 'jsx-to-string';

export type CodeExampleProps = {
  src?: string;
};

const mainClass = 'code-usage-example';

export const CodeUsageExample = ({ children }: React.PropsWithChildren) => {
  const exampleRef = React.useRef();

  return (
    <CE.Block className={mainClass} ref={exampleRef}>
      {/*{ReactDOMServer.renderToReadableStream(<CE.Text content="test"/>)}*/}
      <pre>{ReactDOMServer.renderToString(children)}</pre>
      {ReactDOMServer.renderToStaticMarkup(<CE.Text content='test' />)}
      <p>123</p>
      {jsxToString(children)}
    </CE.Block>
  );
};
