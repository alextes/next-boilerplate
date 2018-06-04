import * as Next from 'next';

declare module 'next' {
  export interface Environment {
    PORT: number;
    NODE_ENV: string;
  }

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
