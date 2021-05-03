import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  image: string;
  type: string;
  path: string;
};

const Ogp: React.FC<Props> = ({ title, description, image, type, path }) => {
  const location: string = process.env.NEXT_PUBLIC_LOCATION || 'https://shunbiboroku.com';
  const url: string = location + path;
  const siteName = 'Shun Bibo Roku';
  const twitterSite = '@DVq0Hp0iU6itt4N';
  const twitterCard = 'summary_large_image';

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};
export default Ogp;
