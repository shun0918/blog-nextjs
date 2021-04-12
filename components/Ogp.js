import Head from 'next/head'
function Ogp({ title, description, image, type, path }) {
  const location = process.env.NEXT_PUBLIC_LOCATION || 'https://shunbiboroku.com'
  const url = location + path
  const siteName = "Shun Bibo Roku"


  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kabosu_en" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
export default Ogp;