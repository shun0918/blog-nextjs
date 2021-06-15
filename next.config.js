const path = require('path');
const withPWA = require('next-pwa');

module.exports = withPWA({
  experimental: {
    optimizeFonts: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src'),
    };
    return config;
  },
  pwa: {
    dest: 'public',
    // runtimeCaching: []
  },
});
