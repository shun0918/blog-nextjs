import Document, { Html, Head, Main, NextScript } from 'next/document';
import Ga from '~/components/Ga';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <Ga />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
