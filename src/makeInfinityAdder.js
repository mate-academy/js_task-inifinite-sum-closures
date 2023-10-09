'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (typeof num !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
