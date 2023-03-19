import { BreakpointName, BREAKPOINTS_BY_NAME } from "../constants/breakpoints";

export interface ImageSrcSet extends Record<BreakpointName, typeof BREAKPOINTS_BY_NAME[BreakpointName]['from']> {

}