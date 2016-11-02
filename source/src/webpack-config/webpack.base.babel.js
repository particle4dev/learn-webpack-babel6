const path = require('path');
const webpack = require('webpack')
const { LoaderOptionsPlugin } = require('webpack')

// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

module.exports = (options) => ({
  entry: options.entry,

  output: Object.assign({
    path: path.resolve(process.cwd(), 'build', 'css'),
  }, options.output),

  module: {
    loaders: [{
      test: /\.js$/, // Transform all .js files required somewhere with Babel
      loader: 'babel',
      exclude: /node_modules/,
      query: options.babelQuery,
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: options.cssLoaders,
    }]
  },

  plugins: options.plugins.concat([
    new LoaderOptionsPlugin({
      options: {
        postcss: () => {
          return [
            postcssFocus(), // Add a :focus to every :hover
            cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
              browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
            }),
            postcssReporter({ // Posts messages from plugins to the terminal
              clearMessages: true,
            }),
           ]
        }
      }
    })
  ]),

  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  // stats: false, // Don't show stats in the console
  // progress: true,
});
