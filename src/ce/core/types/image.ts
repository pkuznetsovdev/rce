import { BREAKPOINTS_BY_NAME } from "../constants/breakpoints";

type Name = keyof typeof BREAKPOINTS_BY_NAME;

export interface ImageSrcSet extends Record<Name, typeof BREAKPOINTS_BY_NAME[Name]['from']> {

}