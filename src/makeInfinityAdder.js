'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(value) {
    if (value === undefined) {
      const returnSum = sum;

      sum = 0;

      return returnSum;
    } else {
      sum += value;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
