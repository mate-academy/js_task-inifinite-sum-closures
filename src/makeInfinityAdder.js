'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let calculateSum = 0;

  function adder(num) {
    let printSum = 0;

    if (!num) {
      printSum = calculateSum;
      calculateSum = 0;

      return printSum;
    }

    calculateSum += num;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
