const RESPONSIVE_WIDTH = {
  MOBILE: 420,
  TABLET: 1024,
  DESKTOP: 1025,
} as const;

export const MEDIA_QUERY = {
  MOBILE: `@media (max-width: ${RESPONSIVE_WIDTH.MOBILE}px)`,
  TABLET: `@media (max-width: ${RESPONSIVE_WIDTH.TABLET}px)`,
  DESKTOP: `@media (min-width: ${RESPONSIVE_WIDTH.DESKTOP}px)`,
} as const;
