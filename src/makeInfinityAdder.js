'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (x) => {
    if (x !== undefined) {
      sum += x;

      return adder;
    }

    const lastSum = sum;

    sum = 0;

    return lastSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
