'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const adding = a => {
    if (a === undefined) {
      const resultSum = currentSum;

      currentSum = 0;

      return resultSum;
    }

    currentSum += a;

    return adding;
  };

  return adding;
}

module.exports = makeInfinityAdder;
