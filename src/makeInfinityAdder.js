'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (...numbers) => {
    if (numbers.length === 0) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += numbers.reduce((acc, number) => acc + number, 0);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
