const test = require('tape');
require('./coupon-code');

(function(){
  class Cat {
    meow () {
      return `meow meow ${this.name}`;
    }
  }
  test('class test', function (t) {
    t.plan(2);
    const c = new Cat();
    c.name = 'name';

    t.equal(typeof c, 'object');
    t.equal(c.meow(), 'meow meow name');
  });
})();

(function(){
  let foobar = () => {
    return 10;
  };
  test('arrow functions test', function (t) {
    t.plan(1);
    t.equal(10, foobar());
  });
})();

(function(){
  let foo = (msg="I am default") => {
    return msg;
  }
  test('default params test', function (t) {
    t.plan(1);
    t.equal('I am default', foo());
  });
})();

(function(){
  let foo2 = (...x) => {
    return x.length;
  }
  test('rest params test', function (t) {
    t.plan(1);
    t.equal(3, foo2(1, 2, 3));
  });
})();

(function(){
  var list = [1, 2, 3, 4];
  let foo3 = (i, j, k, l) => {
    return i*j*k*l;
  }
  test('spread test', function (t) {
    t.plan(1);
    t.equal(24, foo3(...list));
  });
})();

(function(){
  var x = "foo";
  var y = "bar";
  var join = `${x} ${y}`;
  test('template test', function (t) {
    t.plan(1);
    t.equal(join, 'foo bar');
  });
})();
