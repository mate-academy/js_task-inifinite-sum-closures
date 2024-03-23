'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(item) {
    if (item === null || item === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += item;

    return adder;
  };
}

module.exports = makeInfinityAdder;
