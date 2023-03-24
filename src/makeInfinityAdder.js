'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const adder = number => {
    if (number !== undefined) {
      currentSum += number;

      return adder;
    }

    const finalSum = currentSum;

    currentSum = 0;

    return finalSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
