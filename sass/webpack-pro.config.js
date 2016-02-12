var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require("./webpack.config")({
  devtool: false,
  cache: false,
  debug: false,
  output: {
    filename: '[name].[chunkhash].js'
  },
  loaders: {
    "scss|sass": {
      loader: ExtractTextPlugin.extract("css!autoprefixer?browsers=last 2 versions!sass")
    }
  }
});
