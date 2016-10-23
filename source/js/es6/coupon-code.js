// https://github.com/magento/magento2/blob/077584c99ebb8007cad176c3b9a0144a05c259cd/app/code/Magento/SalesRule/Model/Coupon/Codegenerator.php
// https://github.com/magento/magento2/blob/077584c99ebb8007cad176c3b9a0144a05c259cd/app/code/Magento/SalesRule/Model/Coupon/Massgenerator.php
const test = require('tape');
const DEFAULT_LENGTH_MIN = 16;
const DEFAULT_LENGTH_MAX = 32;
const SYMBOLS_COLLECTION = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const NUMBERS_COLLECTION = '0123456789';
const DEFAULT_DELIMITER = '-';
const COUPON_FORMAT_ALPHANUMERIC = 'Alphanumeric';
const COUPON_FORMAT_ALPHABETICAL = 'Alphabetical';
const COUPON_FORMAT_NUMERIC = 'Numeric';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateCode = (state, alphabet, length, prefix = '') => {
  return {
    generateCode() {
      let code = '';
      for (let i = 0, indexMax = alphabet.length - 1; i < length; ++i) {
        code += alphabet.substr(getRandomInt(0, indexMax), 1);
      }
      return prefix + code;
    }
  };
};

const VoucherCode = (function(){
  let instance = null;

  return () => {
    if(!instance) {
      let state = {};
      instance = Object.assign(
        {},
        generateCode(state, NUMBERS_COLLECTION, 8, 20)
      );
    }
    return instance;
  }
})();

const OrderId = (function(){
  let instance = null;

  return () => {
    if(!instance) {
      let state = {};
      instance = Object.assign(
        {},
        generateCode(state, NUMBERS_COLLECTION, 8, 10)
      );
    }
    return instance;
  }
})();

test('VoucherCode test', function (t) {
  t.plan(2);
  const voucherCode = new VoucherCode();
  t.equal(typeof voucherCode.generateCode, 'function');
  const x = voucherCode.generateCode();
  const y = voucherCode.generateCode();
  t.notEqual(x, y);
});

test('OrderId test', function (t) {
  t.plan(2);
  const orderId = new OrderId();
  t.equal(typeof orderId.generateCode, 'function');
  const x = orderId.generateCode();
  const y = orderId.generateCode();
  t.notEqual(x, y);
});

