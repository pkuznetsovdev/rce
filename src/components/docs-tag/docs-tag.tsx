import React from 'react';
import CE from 'react-content-elements';
import { CodeExample } from '../../modules';
import { CODE_EXAMPLES } from '../../constants';

export const DocsTag = () => {
  return (
    <>
      <CE.Text modifiers={['title']}>Tag</CE.Text>
      <CE.Text>
        Each Content Element in the system is assigned a default HTML tag based on its name. This default tag represents
        the recommended HTML tag for the respective Content Element.
      </CE.Text>
      <CE.Text>
        However, if you explicitly provide a tag via the inline property when using a Content Element, that specified
        tag will take precedence over the default tag. This means that the provided tag will be used as the HTML tag for
        the element, overriding the default tag assignment.
      </CE.Text>
      <CE.Text>
        By allowing the flexibility to specify a tag inline, developers have the ability to customize and fine-tune the
        HTML structure generated by Content Elements. This approach provides greater control and adaptability when it
        comes to integrating the Content Elements into specific contexts or accommodating specific requirements.
      </CE.Text>
      <CE.Text>
        In summary, each Content Element has a default tag assigned based on its name, but you can override this default
        by providing an inline tag property, which will be given top priority in determining the HTML tag used for the
        element.
      </CE.Text>
      <CodeExample ex={CODE_EXAMPLES.TAG_USAGE} />
    </>
  );
};
