import styled from 'react-emotion';
import { ifProps, media } from '../../lib/style-utils';

// Example of a styled button with custom props
interface ButtonProps {
  width: number;
  bold?: boolean;
}

export const Button = styled<ButtonProps, 'button'>('button')(
  {
    background: 'red',
    border: 'none',
    ':hover': {
      background: 'blue',
    },
  },
  ifProps<ButtonProps>({
    width: ({ width }) => ({ width }),
    bold: {
      fontWeight: 'bold',
      [media.min('md')]: {
        fontWeight: 'normal',
        ':hover': {
          fontSize: 100,
        },
      },
    },
  }),
  // ({ width, bold }) => ({
  //   width,
  //   ...ifProp(
  //     bold,
  //     {
  //       fontWeight: 'bold',
  //       [media.min('md')]: {
  //         fontWeight: 'normal',
  //         ':hover': {
  //           fontSize: 100,
  //         },
  //       },
  //     },
  //     { background: 'black' },
  //   ),
  // }),
);
