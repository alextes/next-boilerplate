import React from 'react';
import { Context } from 'next';

import { Button } from '../components';

export default class Index extends React.Component {
  public static async getInitialProps(_ctx: Context<undefined>) {
    return {};
  }

  public render() {
    return (
      <div>
        <p>Hello Next.js</p>
        <Button width={100}>Click me!</Button>
        <Button width={100} bold>
          Click me!
        </Button>
      </div>
    );
  }
}
