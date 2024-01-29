'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(a) {
    if (a === undefined) {
      const currentSum = sum;

      sum = 0; // Очищення суми

      return currentSum;
    }

    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
