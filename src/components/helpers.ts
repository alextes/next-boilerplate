import { CSSProperties } from 'react';

import { breakpoints, fonts } from './config';

// Return a valid CSS string for the font families
export function getFontFamily(f: keyof typeof fonts) {
  const family = fonts[f];
  if (!family) {
    return '';
  }
  return family.join(', ');
}

// Helper for breakpoints
export const media = {
  min: (bp: keyof typeof breakpoints) =>
    `@media(min-width: ${breakpoints[bp]}px)`,
  max: (bp: keyof typeof breakpoints) =>
    `@media(max-width: ${breakpoints[bp]}px)`,
};

// Quickly add conditional styles based on props
type StyleFunction<P> = (props: P) => CSSProperties;
type Style<P> = CSSProperties | StyleFunction<P>;
type PropMap<P> = { [key in keyof P]: Style<P> };

export function ifProps<P>(propMap: PropMap<P>) {
  return (props: P) =>
    Object.keys(props)
      .map((key: keyof P) => {
        const propStyle: Style<P> = propMap[key];
        return props[key]
          ? propStyle && typeof propStyle === 'function'
            ? propStyle(props)
            : (propStyle as CSSProperties)
          : {};
      })
      .reduce((all, style) => ({ ...all, ...style }), {});
}

// Conditionally return styles
export const ifProp = (
  predicate: boolean,
  styles: CSSProperties,
  stylesIfFalse?: CSSProperties,
) => (predicate ? styles : stylesIfFalse);
