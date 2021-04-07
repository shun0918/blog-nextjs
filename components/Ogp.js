import { useRouter } from 'next/router';
function Ogp({ title, description, imagePath, type, path }) {
  const router = useRouter()
  const url = "http://localhost" + path
  const siteName = "Shun Bibo Roku"


  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta name="keywords" content={keyword} /> */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imagePath} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}
export default Ogp;