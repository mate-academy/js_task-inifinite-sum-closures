'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function sum(x) {
    if (!x) {
      const buff = result;

      result = 0;

      return buff;
    }

    if (typeof x === 'number') {
      result += x;
    }

    return function res(y) {
      return sum(y);
    };
  };
}

module.exports = makeInfinityAdder;
