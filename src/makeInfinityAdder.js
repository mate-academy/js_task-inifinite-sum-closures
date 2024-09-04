'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(number) {
    if (number === undefined) {
      const currentResult = sum;

      sum = 0;

      return currentResult;
    }
    sum += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
