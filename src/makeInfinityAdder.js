'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let finalSum = 0;

  function adder(number) {
    if (number === undefined) {
      finalSum = sum;
      sum = 0;

      return finalSum;
    }

    sum += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
