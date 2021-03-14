'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function calcSum(number) {
    if (number === undefined) {
      const newSum = sum;

      sum = 0;

      return newSum;
    } else {
      sum += number;

      return calcSum;
    }
  };
}

module.exports = makeInfinityAdder;
