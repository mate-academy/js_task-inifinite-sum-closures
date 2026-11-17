'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (...numbers) => {
    if (numbers.length === 0) {
      const saveSum = sum;

      sum = 0;

      return saveSum;
    }
    sum += numbers[0];

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
