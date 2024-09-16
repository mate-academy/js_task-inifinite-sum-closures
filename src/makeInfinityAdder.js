'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const getSum = (number) => {
    if (typeof number === 'number') {
      sum += number;

      return getSum;
    }

    const currentSum = sum;

    sum = 0;

    return currentSum;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
