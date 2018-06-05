import React from 'react';
import { ExtendedWindow } from 'next';
import App, { Container } from 'next/app';
import { hydrate } from 'emotion';

export default class MyApp extends App {
  public componentDidMount() {
    if (typeof window !== 'undefined') {
      hydrate((window as ExtendedWindow).__NEXT_DATA__.ids);
    }
    // injectGlobalStyles();
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
