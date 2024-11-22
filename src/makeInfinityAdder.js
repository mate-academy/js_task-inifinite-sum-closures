'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(value) {
    if (value === undefined) {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }

    sum += value;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
