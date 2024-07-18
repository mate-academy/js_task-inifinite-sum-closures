'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (typeof num === 'number') {
      sum += num;

      return adder;
    }

    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    return sum;
  };
}

module.exports = makeInfinityAdder;
