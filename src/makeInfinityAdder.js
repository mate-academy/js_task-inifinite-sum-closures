'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const getSum = (number) => {
    if (!number) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += number;

    return getSum;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
