module.exports = require("./webpack.config")({
  devtool: false,
  cache: false,
  debug: false,
  output: {
    filename: '[name].[chunkhash].js'
  },
  loaders: {
    "js": {
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }
  }
});
