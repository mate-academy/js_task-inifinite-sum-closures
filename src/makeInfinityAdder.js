'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const addition = (num) => {
    if (num === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += num;

    return addition;
  };

  return addition;
}

module.exports = makeInfinityAdder;
