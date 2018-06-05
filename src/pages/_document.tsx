import Document, { Context, Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }: Context) {
    const page = renderPage();
    const styles = extractCritical(page.html || page.errorHtml);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>With Emotion</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <script
            dangerouslySetInnerHTML={{
              __html: '' /* `window.env = { VAR: '${env.VAR}' };` */,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
