'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (x) => {
    if (x === undefined) {
      const totalSum = sum;

      sum = 0;

      return totalSum;
    }
    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
