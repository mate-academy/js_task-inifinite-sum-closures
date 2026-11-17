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

    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
