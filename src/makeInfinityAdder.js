'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(value) {
    if (value === undefined) {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }
    sum += value;

    return adder;
  };
}

module.exports = makeInfinityAdder;
