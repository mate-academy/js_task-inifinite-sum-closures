'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  const adder = (x) => {
    if (x === undefined) {
      const resultSum = totalSum;

      totalSum = 0;

      return resultSum;
    }

    totalSum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
