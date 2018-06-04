import React from 'react';
import { GetInitialProps } from 'types/next';

export default class Index extends React.Component {
  public static async getInitialProps(_ctx: GetInitialProps<undefined>) {
    return {};
  }

  public render() {
    return (
      <div>
        <p>Hello Next.js</p>
      </div>
    );
  }
}
