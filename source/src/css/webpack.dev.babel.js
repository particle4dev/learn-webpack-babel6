const path = require('path');

module.exports = require('../webpack-config/webpack.base.babel')({
  // Add hot reloading in development
  entry: [
    'eventsource-polyfill', // Necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'src/css/index.js'),
  ],
  plugins: [

  ]
});
