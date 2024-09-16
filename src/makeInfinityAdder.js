'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const newSum = sum;

      sum = 0;

      return newSum;
    }

    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
