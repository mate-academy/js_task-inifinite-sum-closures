'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(...numbers) {
    if (numbers.length === 0) {
      const total = sum;

      sum = 0;

      return total;
    }
    sum += numbers.reduce((acc, number) => acc + number, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
