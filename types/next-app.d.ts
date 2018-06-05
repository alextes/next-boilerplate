declare module 'next/app' {
  export interface AppProps {
    Component: React.ComponentType;
    pageProps: any;
  }
  export class Container extends React.Component {}
  export default class App extends React.Component<AppProps> {}
}
