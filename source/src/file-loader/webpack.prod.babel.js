const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('../webpack-config/webpack.base.babel')({
  // In production, we skip all hot-reloading in stuff
  entry: [
    path.join(process.cwd(), 'src/file-loader/index.js'),
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
  },{
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader',
  }],

  path: 'file-loader',

  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'src/file-loader/index.html',
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
