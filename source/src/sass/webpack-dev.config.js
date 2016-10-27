var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require("./webpack.config")({
  devtool: "source-map",
  cache: false,
  debug: true,
  output: {
    filename: '[name].js'
  },
  loaders: {
    "scss|sass": {
      loader: ExtractTextPlugin.extract("style-loader", "css?sourceMap!autoprefixer?browsers=last 2 versions!sass?sourceMap")
    }
  }
});
