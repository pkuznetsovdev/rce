const BY_NAME =
  '/* example of usage */\n' +
  "@include byName('block') {\n" +
  '  width: 100%;\n' +
  '  display: flex;\n' +
  '  align-items: center;\n' +
  '}\n' +
  '/* css */\n' +
  '.ce-block {\n' +
  '  width: 100%;\n' +
  '  display: flex;\n' +
  '  align-items: center;\n' +
  '}';

const BY_MODIFIER =
  '/* custom breakpoint values */\n' +
  "@forward 'react-content-elements/dist/styles' with (\n" +
  '  $screen-xs: 576px,\n' +
  '  $screen-sm: 768px,\n' +
  '  $screen-md: 992px,\n' +
  '  $screen-lg: 1200px,\n' +
  '  $screen-xl: 1440px,\n' +
  '  $screen-xxl: 1920px,\n' +
  ');\n' +
  '\n' +
  '/* example of usage */\n' +
  "@include byModifier('card-info') {\n" +
  '  margin-left: 15px;\n' +
  '}\n' +
  '\n' +
  '/* css */\n' +
  '.ce--card-info {\n' +
  '  margin-left: 15px;\n' +
  '}\n' +
  '@media (min-width: 576px) {\n' +
  '  .ce--card-info-above-xs {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (max-width: 575.999px) {\n' +
  '  .ce--card-info-beyond-xs {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (min-width: 768px) {\n' +
  '  .ce--card-info-above-sm {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (max-width: 767.999px) {\n' +
  '  .ce--card-info-beyond-sm {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (min-width: 992px) {\n' +
  '  .ce--card-info-above-md {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (max-width: 991.999px) {\n' +
  '  .ce--card-info-beyond-md {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (min-width: 1200px) {\n' +
  '  .ce--card-info-above-lg {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (max-width: 1199.999px) {\n' +
  '  .ce--card-info-beyond-lg {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (min-width: 1440px) {\n' +
  '  .ce--card-info-above-xl {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (max-width: 1439.999px) {\n' +
  '  .ce--card-info-beyond-xl {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (min-width: 1920px) {\n' +
  '  .ce--card-info-above-xxl {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (max-width: 1919.999px) {\n' +
  '  .ce--card-info-beyond-xxl {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}';

const WITH_MODIFIER =
  '/* example of usage */\n' +
  '.title {\n' +
  "    @include withModifier('card-info') {\n" +
  '      margin-left: 15px;\n' +
  '    }\n' +
  '}\n' +
  '\n' +
  '/* css */\n' +
  '.title.ce--card-info {\n' +
  '  margin-left: 15px;\n' +
  '}\n' +
  '@media (min-width: 576px) {\n' +
  '  .title.ce--card-info-above-xs {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (max-width: 575.999px) {\n' +
  '  .title.ce--card-info-beyond-xs {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (min-width: 768px) {\n' +
  '  .title.ce--card-info-above-sm {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (max-width: 767.999px) {\n' +
  '  .title.ce--card-info-beyond-sm {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (min-width: 992px) {\n' +
  '  .title.ce--card-info-above-md {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (max-width: 991.999px) {\n' +
  '  .title.ce--card-info-beyond-md {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (min-width: 1200px) {\n' +
  '  .title.ce--card-info-above-lg {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (max-width: 1199.999px) {\n' +
  '  .title.ce--card-info-beyond-lg {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (min-width: 1440px) {\n' +
  '  .title.ce--card-info-above-xl {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (max-width: 1439.999px) {\n' +
  '  .title.ce--card-info-beyond-xl {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (min-width: 1920px) {\n' +
  '  .title.ce--card-info-above-xxl {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}\n' +
  '@media (max-width: 1919.999px) {\n' +
  '  .title.ce--card-info-beyond-xxl {\n' +
  '    margin-left: 15px;\n' +
  '  }\n' +
  '}';

const NEXT_BY_NAME =
  '/* example of usage */\n' +
  '.item {\n' +
  "    @include nextByName('item') {\n" +
  '        margin-left: 15px;\n' +
  '    }\n' +
  '}\n' +
  '/* css */\n' +
  '.item + .ce-item {\n' +
  '  margin-left: 15px;\n' +
  '}';

const NEXT_BY_MODIFIER =
  '/* example of usage */\n' +
  '.item {\n' +
  "    @include nextByModifier('item') {\n" +
  '        margin-left: 15px;\n' +
  '    }\n' +
  '}\n' +
  '/* css */\n' +
  '.item + .ce--item {\n' +
  '  margin-left: 15px;\n' +
  '}';

const CHILD_BY_NAME =
  '/* example of usage */\n' +
  '.item {\n' +
  "    @include childByName('item') {\n" +
  '        margin-left: 15px;\n' +
  '    }\n' +
  '}\n' +
  '/* css */\n' +
  '.item > .ce-item {\n' +
  '  margin-left: 15px;\n' +
  '}';
const CHILD_BY_MODIFIER =
  '/* example of usage */\n' +
  '.item {\n' +
  "    @include childByModifier('item') {\n" +
  '        margin-left: 15px;\n' +
  '    }\n' +
  '}\n' +
  '/* css */\n' +
  '.item > .ce--item {\n' +
  '  margin-left: 15px;\n' +
  '}';

export const MODIFIERS = {
  BY_NAME,
  BY_MODIFIER,
  WITH_MODIFIER,
  NEXT_BY_NAME,
  NEXT_BY_MODIFIER,
  CHILD_BY_NAME,
  CHILD_BY_MODIFIER,
};
