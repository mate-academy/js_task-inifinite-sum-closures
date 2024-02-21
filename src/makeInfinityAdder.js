'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;
  const adder = (firstNumber) => {
    if (!firstNumber) {
      const sumToDisplay = totalSum;

      totalSum = 0;

      return sumToDisplay;
    }

    totalSum = firstNumber;

    function func(secondNumber) {
      if (!arguments.length) {
        const sumToDisplay = totalSum;

        totalSum = 0;

        return sumToDisplay;
      }

      totalSum += secondNumber;

      return func;
    }

    return func;
  };

  return adder;
}

module.exports = makeInfinityAdder;
