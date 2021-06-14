const path = require('path');

module.exports = {
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
};
