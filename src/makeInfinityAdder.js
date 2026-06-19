'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let totalSum = 0;

  function adder(number) {
    if (number === undefined) {
      const currentValue = totalSum;

      totalSum = 0;

      return currentValue;
    }

    totalSum += number;

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
