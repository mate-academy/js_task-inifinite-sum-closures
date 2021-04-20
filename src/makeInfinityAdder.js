'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const infiniteAdder = function(number) {
    if (number === undefined) {
      const result = currentSum;

      currentSum = 0;

      return result;
    }

    currentSum += number;

    return infiniteAdder;
  };

  return infiniteAdder;
}

module.exports = makeInfinityAdder;
