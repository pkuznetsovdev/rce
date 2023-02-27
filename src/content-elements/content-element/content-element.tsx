import { getContentElementByName, MockedContentElement } from "./utils";
// import 'src/content-elements/styles/index.scss';

// TODO: add dynamic generation
export const ContentElement = {
  Text: getContentElementByName("text"),
  // Image: getContentElementByName("image"),
  Block: getContentElementByName("block"),
  // List: getContentElementByName<"list">("list"),
  // Condition: getContentElementByName("condition"),
  //
  Page: MockedContentElement,
} as const;
