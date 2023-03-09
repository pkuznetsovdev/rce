import { BREAKPOINTS_BY_NAME } from "./breakpoints";

export const IMAGE_SRC_SET = Object.entries(BREAKPOINTS_BY_NAME).reduce((res, [name, { from }]) => ({ ...res, [name]: from }), {})
