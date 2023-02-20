import { STRING_LITERALS } from '../models';

export const SHARED_UTILS = {
  getClassNames(...classes: any[]) {
    const classNames = classes.flat(1);
    return classNames
      .filter((n) => n && typeof n === 'string')
      .map((n) => n.trim().toLowerCase())
      .join(STRING_LITERALS.space);
  },
  capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
};
