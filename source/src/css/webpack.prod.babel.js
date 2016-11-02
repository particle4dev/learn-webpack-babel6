const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = require('../webpack-config/webpack.base.babel')({
  // In production, we skip all hot-reloading in stuff
  entry: [
    path.join(process.cwd(), 'src/css/index.js'),
  ],
  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  // We use ExtractTextPlugin so we get a separate CSS file instead
  // of the CSS being in the JS and injected as a style tag
  cssLoaders: ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: 'css-loader?modules&-autoprefixer&importLoaders=1!postcss-loader',
  }),
  plugins: [
    // Extract the CSS into a separate file
    new ExtractTextPlugin('[name].[contenthash].css'),
  ]
});
