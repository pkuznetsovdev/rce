import { NestedPaths, TypeFromPath } from "../../../shared/types/type-nested-paths";
import DATA_BY_PAGE from "./data-by-page";

export type PathToData = NestedPaths<typeof DATA_BY_PAGE>;
export type DataByPath<Path extends PathToData = PathToData> = TypeFromPath<
  typeof DATA_BY_PAGE,
  Path
>;
