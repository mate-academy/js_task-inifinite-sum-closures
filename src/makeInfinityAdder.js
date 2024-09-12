'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(value) {
    if (typeof value !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += value;

    return adder;
  };
}

module.exports = makeInfinityAdder;
