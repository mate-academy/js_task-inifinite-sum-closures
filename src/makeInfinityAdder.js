'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentResult = 0;

  return function sumFactory(inputNumber) {
    // accepting 0, decimals and string numbers as params:
    const isNumber = Number.isInteger(parseInt(inputNumber));

    if (!isNumber) {
      const finalResult = currentResult;

      currentResult = 0;

      return finalResult;
    }

    currentResult += +inputNumber;

    return sumFactory;
  };
}

module.exports = makeInfinityAdder;
