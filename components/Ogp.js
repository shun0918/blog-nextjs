import { useRouter } from 'next/router'
import Head from 'next/head'
function Ogp({ title, description, imagePath, type, path }) {
  const location = process.env.NEXT_PUBLIC_LOCATION || 'https://shunbiboroku.com'
  const router = useRouter()
  const url = location + path
  const siteName = "Shun Bibo Roku"


  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imagePath} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kabosu_en" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imagePath} />
    </Head>
  )
}
export default Ogp;