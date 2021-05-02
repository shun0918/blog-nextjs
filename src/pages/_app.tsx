import Head from 'next/head';
import { useRouter } from 'next/router';
import usePageView from '../hooks/usePageView';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/_app/destyle.css';
import '../styles/_app/globals.scss';
import type {AppProps} from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  const isTopPage = useRouter().pathname === '/';
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      {isTopPage ? null : <Header />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
