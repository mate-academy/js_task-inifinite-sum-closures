'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let startingValue = 0;

  return function adder(num) {
    if (num !== undefined) {
      startingValue += num;

      return adder;
    }

    const currentSum = startingValue;

    startingValue = 0;

    return currentSum;
  };
}

module.exports = makeInfinityAdder;
