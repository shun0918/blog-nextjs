import usePageView from '../hooks/usePageView'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/_app/destyle.css'
import '../styles/_app/globals.scss'

function MyApp({ Component, pageProps }) {
  usePageView()
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
