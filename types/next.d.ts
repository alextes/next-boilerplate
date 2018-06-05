import * as Next from 'next';
import { Environment } from '../src/lib/env';

// Next's type defs aren't complete yet. Until the discussion is resolved we have these (https://github.com/zeit/next.js/issues/1651)
declare module 'next' {
  export interface ExtendedWindow extends Window {
    __NEXT_DATA__: {
      ids: string[];
    };
    env: Environment;
  }

  export interface Context<Q = {}> {
    query: Q; // query string section of URL parsed as an object
    pathname: string; // path section of URL
    asPath: string; // String of the actual path (including the query) shows in the browser
    req: Request;
    res: Response;
    jsonPageRes: Response;
    err: Error;
  }

  // Need this when composing Hocs
  export interface Component<P = {}, S = {}>
    extends React.ComponentLifecycle<P, S> {
    getInitialProps?(ctx: Context<any>, ...args: any[]): Promise<any>;
  }
}
