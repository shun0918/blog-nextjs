import Head from 'next/head';
import usePageView from '~/hooks/usePageView';
import Footer from '~/components/Footer';
import '~/styles/_app/destyle.css';
import '~/styles/_app/globals.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  usePageView();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4145338195858150"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
