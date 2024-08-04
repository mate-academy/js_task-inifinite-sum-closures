'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let currentResult = 0;

  function adder(number) {
    if (number === undefined) {
      const result = currentResult;

      currentResult = 0;

      return result;
    }

    currentResult += number;

    return adder;
  }

  return adder;
}
module.exports = makeInfinityAdder;
