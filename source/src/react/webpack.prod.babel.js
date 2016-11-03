const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('../webpack-config/webpack.base.babel')({
  // In production, we skip all hot-reloading in stuff
  entry: [
    path.join(process.cwd(), 'src/react/index.js'),
  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  loaders: [{
    test: /\.js$/, // Transform all .js files required somewhere with Babel
    loader: 'babel',
    exclude: /node_modules/,
    query: undefined,
  }],

  path: 'react',

  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'src/react/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ]
});
