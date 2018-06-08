import { CSSProperties } from 'react';

import { ifProp } from './style-utils';

test('it conditionally returns style', () => {
  const style: CSSProperties = { fontWeight: 'bold' };
  const conditionalStyles = ifProp(true, style);
  expect(conditionalStyles).toEqual(style);
});
