// https://github.com/magento/magento2/blob/077584c99ebb8007cad176c3b9a0144a05c259cd/app/code/Magento/SalesRule/Model/Coupon/Codegenerator.php
// https://github.com/magento/magento2/blob/077584c99ebb8007cad176c3b9a0144a05c259cd/app/code/Magento/SalesRule/Model/Coupon/Massgenerator.php
const test = require('tape');
const DEFAULT_LENGTH_MIN = 16;
const DEFAULT_LENGTH_MAX = 32;
const SYMBOLS_COLLECTION = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const DEFAULT_DELIMITER = '-';
const COUPON_FORMAT_ALPHANUMERIC = 'Alphanumeric';
const COUPON_FORMAT_ALPHABETICAL = 'Alphabetical';
const COUPON_FORMAT_NUMERIC = 'Numeric';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateCode = (state) => {
  return {
    generateCode() {
      const alphabet = SYMBOLS_COLLECTION;
      const length = DEFAULT_LENGTH_MIN;
      let code = '';
      for (let i = 0, indexMax = alphabet.length - 1; i < length; ++i) {
        code += alphabet.substr(getRandomInt(0, indexMax), 1);
      }
      return code;
    }
  };
};

let instance = null;
const Coupon = () => {
  if(!instance) {
    let state = {};
    instance = Object.assign(
      {},
      generateCode(state)
    );
  }
  return instance;
}

test('coupon test', function (t) {
  t.plan(2);
  const coupon = new Coupon();
  t.equal(typeof coupon.generateCode, 'function');
  const x = coupon.generateCode();
  const y = coupon.generateCode();
  t.notEqual(x, y);
});
