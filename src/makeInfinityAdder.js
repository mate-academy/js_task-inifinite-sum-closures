'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adding = (x) => {
    if (x === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += x;

    return adding;
  };

  return adding;
}

module.exports = makeInfinityAdder;
