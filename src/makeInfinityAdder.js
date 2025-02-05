'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(number) {
    if (number || number === 0) {
      sum += number;

      return adder;
    } else {
      const localSum = sum;

      sum = 0;

      return localSum;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
