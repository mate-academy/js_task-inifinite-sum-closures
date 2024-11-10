'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }

    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Only numeric values are allowed');
    }
    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
