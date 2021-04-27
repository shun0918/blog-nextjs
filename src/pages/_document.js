import Document, { Html, Head, Main, NextScript } from 'next/document';
import Ga from '../components/Ga';

export default class MyDocument extends Document {
  render() {
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
