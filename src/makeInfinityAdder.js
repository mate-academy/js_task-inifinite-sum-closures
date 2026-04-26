'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const result = (...args) => {
    if (args.length === 0) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += args.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );

    return result;
  };

  return result;
}

module.exports = makeInfinityAdder;
