var path                  = require('path');
var loadersByExtension    = require('../loaders-by-extension');
var AssetsPlugin          = require('assets-webpack-plugin');
var ExtractTextPlugin     = require('extract-text-webpack-plugin');
var assetsPluginInstance  = new AssetsPlugin({
  filename: 'assets.json',
  prettyPrint: true,
  path: path.join(__dirname, 'build')
});

module.exports = function(options) {
  var loaders = null;
  var plugins = [];
  if(options.plugins){
    options.plugins.forEach(function (p) {
      plugins.push(p);
    });
  }
  if(process.env.NODE_ENV === 'production') {
    plugins.push(new ExtractTextPlugin('[name].[chunkhash].css', {
      allChunks: true
    }));
    plugins.push(assetsPluginInstance);
  }
  if(process.env.NODE_ENV === 'development'){
    plugins.push(new ExtractTextPlugin('[name].css', {
      allChunks: true
    }));
  }

  return {
    devtool: options.devtool,
    cache: options.cache,
    debug: options.debug,
    target: 'web',
    entry: [
      './src/sass/page1.js'
    ],
    output: {
      path: path.join(__dirname, './build'),
      filename: options.output.filename
    },
    module: {
      loaders: [].concat(loadersByExtension(loaders)).concat(loadersByExtension(options.loaders))
    },
    plugins: plugins,
  };
};
