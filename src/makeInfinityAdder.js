'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let finalSum = 0;

  function adder(num) {
    if (num === undefined) {
      finalSum = sum;
      sum = 0;

      return finalSum;
    }

    sum += num;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
