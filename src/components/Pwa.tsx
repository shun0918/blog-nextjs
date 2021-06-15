const Pwa: React.FC = () => (
  <>
    {/* windows */}
    <meta name="msapplication-square70x70logo" content="/favicons/site-tile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="/favicons/site-tile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="/favicons/site-tile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="/favicons/site-tile-310x310.png" />
    <meta name="msapplication-TileColor" content="#fdf5f2" />
    {/* safari */}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#fdf5f2" />
    <meta name="apple-mobile-web-app-title" content="myapp" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png" />
    {/* 一般 */}
    <meta name="application-name" content="Shun Bibo Roku" />
    <meta name="theme-color" content="#fdf5f2" />
    <meta name="description" content="個人開発で得た知見を共有するブログです。" />
    <link rel="icon" sizes="192x192" href="/favicons/icon-192x192.png" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
  </>
);

export default Pwa;
