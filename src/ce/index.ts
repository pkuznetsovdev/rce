import { getMyElementByNameRenderer } from "./core";

const getMyElementByName = getMyElementByNameRenderer();

export const CE = {
  Text: getMyElementByName("text"),
  Image: getMyElementByName("image"),
  Block: getMyElementByName("block"),
  List: getMyElementByName("list"),
  Link: getMyElementByName("link"),
} as const;
