const path = require('path');

module.exports = {
  experimental: {
    optimizeFonts: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}