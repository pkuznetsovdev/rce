import { DATA_BY_PAGE } from "src/data";
import { PathToData, DataByPath } from "src/data/types";

export function getData<Path extends PathToData>(pathToData: Path): DataByPath<Path> {
  // TODO: FIX TS
  // @ts-ignore
  return DATA_BY_PAGE[pathToData]
}