import Document, { Html, Head, Main, NextScript } from 'next/document';
import Ga from '~/components/Ga';
import Pwa from '~/components/Pwa';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <Ga />
          <Pwa />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
