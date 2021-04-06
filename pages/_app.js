import Head from 'next/head'
import usePageView from '../hooks/usePageView'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/_app/destyle.css'
import '../styles/_app/globals.scss'

function MyApp({ Component, pageProps }) {
  // usePageView()
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Damion&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
