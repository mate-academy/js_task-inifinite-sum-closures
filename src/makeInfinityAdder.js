'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let calculateSum = 0;
  let printSum = 0;

  function outerSum(num1) {
    if (arguments.length === 0) {
      printSum = calculateSum;
      calculateSum = 0;

      return printSum;
    }

    calculateSum += num1;

    return function innerSum(num2) {
      if (arguments.length > 0) {
        calculateSum += num2;

        return innerSum;
      } else {
        printSum = calculateSum;
        calculateSum = 0;

        return printSum;
      }
    };
  }

  return outerSum;
  // write code here
}

module.exports = makeInfinityAdder;
