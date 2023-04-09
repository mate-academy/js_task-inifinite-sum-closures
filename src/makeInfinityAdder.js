'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (number !== undefined) {
      sum += number;

      return adder;
    }

    const zeroSum = sum;

    sum = 0;

    return zeroSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
