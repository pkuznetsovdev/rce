import { useBreakpoints } from '../../constants';
import { ContentElementProps } from '../../content-element/types';

export function useGetBgSrc(bg: ContentElementProps<'block'>['backgroundImage']) {
  const [breakpointName] = useBreakpoints();

  if (!bg) {
    return;
  }

  const { src, srcSet } = bg;

  let bgSrc = src as string;

  if (breakpointName && srcSet && srcSet[breakpointName]) {
    bgSrc = srcSet[breakpointName];
  }

  return bgSrc;
}
