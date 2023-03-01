import { getMyElementByName } from "./rce";

export const CE = {
  Text: getMyElementByName("text"),
} as const;
