'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let totalSum = 0;

  return function adder(number) {
    if (number === undefined) {
      const FINAL_RESULT = totalSum;

      totalSum = 0;

      return FINAL_RESULT;
    }

    totalSum += number;

    return adder;
  };
}

module.exports = makeAdder;
