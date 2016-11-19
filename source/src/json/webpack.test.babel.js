const path = require('path');

module.exports = require('../webpack-config/webpack.base.babel')({
  entry: [
    path.join(process.cwd(), 'src/json/index.js'),
  ],

  output: {
    filename: 'index.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  loaders: [{
    test: /\.json$/,
    loader: 'json-loader',
  }],

  path: 'json',

  target: 'node',
  plugins: []
});
