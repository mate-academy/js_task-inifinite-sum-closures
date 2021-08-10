'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;
  let clearCount = 0;

  const adder = (value) => {
    if (value === undefined) {
      clearCount++;

      if (clearCount === 2) {
        currentSum = 0;
        clearCount = 0;
      }

      return currentSum;
    }

    currentSum += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
