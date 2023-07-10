import React from 'react';
import CE from 'react-content-elements';

import { Layout } from '../../layout';

const mainClass = 'concept';

const Template = () => {
  return (
    <>
      <Layout className={mainClass} title='Web Content Elements'>
        <CE.Block modifiers={['section', 'container']}>
          <CE.Block modifiers={['concept']}>
            <CE.Text>
              In HTML, we use tags as discriminators between elements, with each HTML tag representing a different
              element. We utilize classes to apply styles to these elements, and often resort to custom solutions to
              establish and manage the architecture of the HTML structure and CSS styles, as well as the interactions
              between them.
            </CE.Text>
            <CE.Text>
              Web Content Elements stands for a concept, a design pattern to bring these kinds of solutions to a single,
              linear approach. It might be applied to handle daily web development routines (generating of HTML and
              CSS).
              <br />
              The main idea is to use the element's role as a discriminator, as the main reference for the entity. In
              terms of Web Content Development, HTML tags are just variables (arguments) used to generate the element.
            </CE.Text>
            <CE.Text>
              Web Content Elements is a powerful and formalized approach for creating low-level HTML structures and
              effectively managing the style system throughout an entire project. With Web Content Elements, you have a
              flexible toolset that enables you to generate any kind of HTML structure, while ensuring consistent and
              linear application of styles.
            </CE.Text>
            <CE.Text modifiers={['list-title']}>
              To clarify the dependencies for the Web Content Development flow, we can identify the following key
              aspects:
            </CE.Text>
            <CE.List modifiers={['disc']}>
              <>
                <b>HTML</b>
                <br />
                Content Elements replaces the need for manual code duplications by providing a set of predefined basic
                structures. Instead of recreating common HTML elements, you can leverage Content Elements to generate
                these structures quickly and consistently.
              </>
              <>
                <b>CSS</b>
                <br />
                Content Elements also introduces a simple and scalable style system. By utilizing Content Elements, you
                can achieve a level of independence between the HTML structure and the associated CSS styles. This
                allows for easier management and maintenance of styles throughout the project.
              </>
              <>
                <b>SEO</b>
                <br />
                Content Elements simplifies the process of ensuring search engine optimization (SEO) by providing
                convenient options to adjust tag names, aria-attributes, and other SEO-related elements with a single
                click. This helps optimize the generated HTML structure for better search engine visibility and
                accessibility.
              </>
            </CE.List>
          </CE.Block>
        </CE.Block>
      </Layout>
    </>
  );
};

export default Template;
