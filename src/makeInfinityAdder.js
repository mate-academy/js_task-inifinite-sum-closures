'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(...numbers) {
    if (numbers.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += numbers.reduce((total, number) => total + number, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
