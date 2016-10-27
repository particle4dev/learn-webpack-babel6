var path                  = require('path');
var loadersByExtension    = require('../../loaders-by-extension');

module.exports = function(options) {
  var loaders = null;
  var plugins = [];
  if(options.plugins){
    options.plugins.forEach(function (p) {
      plugins.push(p);
    });
  }
  if(process.env.NODE_ENV === 'production') {}
  if(process.env.NODE_ENV === 'development'){}

  return {
    devtool: options.devtool,
    cache: options.cache,
    debug: options.debug,
    target:  'node',
    entry: [
      './src/js/decorator/test.js'
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
