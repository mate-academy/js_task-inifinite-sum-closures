'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let tempSum = 0;

  function adder(number) {
    if (typeof number !== 'undefined') {
      tempSum += number;

      return adder;
    }

    const sum = tempSum;

    tempSum = 0;

    return sum;
  }

  return adder;
}
module.exports = makeInfinityAdder;
