'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;
  const adder = (n) => {
    if (n !== undefined) {
      currentSum += n;

      return adder;
    }

    const total = currentSum;

    currentSum = 0;

    return total;
  };

  return adder;
}

module.exports = makeInfinityAdder;
