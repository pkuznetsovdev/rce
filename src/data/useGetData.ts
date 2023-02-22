import DATA_BY_PAGE from "./data-by-page";
import { PathToData, DataByPath } from "./types";

export function useGetData<Path extends PathToData>(pathToData: Path): DataByPath<Path> {
  // TODO: FIX TS
  // @ts-ignore
  return DATA_BY_PAGE[pathToData]
}