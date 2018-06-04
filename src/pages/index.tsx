import React from 'react';
import { Context } from 'next';
import styled from 'react-emotion';

// Example of a styled button with custom props
const Button = styled<{ width: number }, 'button'>('button')(
  { background: 'red', border: 'none' },
  props => ({
    width: props.width,
  }),
);

export default class Index extends React.Component {
  public static async getInitialProps(_ctx: Context<undefined>) {
    return {};
  }

  public render() {
    return (
      <div>
        <p>Hello Next.js</p>
        <Button width={100}>Click me!</Button>
      </div>
    );
  }
}
