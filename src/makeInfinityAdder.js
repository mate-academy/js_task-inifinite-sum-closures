'use strict';

/***
 * @return {function}
 */

function makeAdder() {
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += num;

    return adder;
  };
}

module.exports = makeAdder;
