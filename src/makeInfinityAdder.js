'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let currentSum = 0;

  const adder = (...numbers) => {
    if (numbers.length !== 0) {
      const num = numbers[0];

      currentSum += num;

      return adder;
    }

    const result = currentSum;

    currentSum = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
