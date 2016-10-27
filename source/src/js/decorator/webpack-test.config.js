module.exports = require("./webpack.config")({
  devtool: false,
  cache: false,
  debug: false,
  output: {
    filename: '[name].js'
  },
  loaders: {
    "js": {
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        cacheDirectory: true, // !improve performance
        plugins: [
          'transform-decorators-legacy',
        ],
        presets: ['es2015']
      }
    }
  }
});
