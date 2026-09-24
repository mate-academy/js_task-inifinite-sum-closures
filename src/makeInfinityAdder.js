'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(...numbers) {
    if (numbers === undefined || numbers.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += numbers.reduce((total, number) => total + number, 0);

    return adder;
  };
}

module.exports = makeInfinityAdder;
