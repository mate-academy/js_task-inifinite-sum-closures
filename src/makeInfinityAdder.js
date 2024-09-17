'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const returnSum = sum;

      sum = 0;

      return returnSum;
    }

    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
