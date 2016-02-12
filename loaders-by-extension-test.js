var test = require('tape');
var loadersByExtension  = require('./loaders-by-extension');

test('loaders-by-extension test', function (t) {
  t.plan(2);

  t.equal(typeof loadersByExtension, 'function');
  var exp = [{
    extensions: [ 'scss', 'sass' ],
    test: /\.(scss|sass)(\?.*)?$/,
    loader: 'style!css!sass'
  }];
  t.deepEqual(exp, loadersByExtension({
    "scss|sass": {
      loader: "style!css!sass"
    }
  }));
});
