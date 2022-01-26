'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(val) {
    if (typeof val !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += val;

    return adder;
  };
}

module.exports = makeInfinityAdder;
