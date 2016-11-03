const path = require('path');

module.exports = require('../webpack-config/webpack.base.babel')({
  // In production, we skip all hot-reloading in stuff
  entry: [
    path.join(process.cwd(), 'src/json/index.js'),
  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  loaders: [{
    test: /\.json$/,
    loader: 'json-loader',
  }],

  path: 'json',

  plugins: []
});
