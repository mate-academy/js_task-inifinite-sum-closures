'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfNums = 0;

  function adder(number) {
    const result = sumOfNums;

    if (!number) {
      sumOfNums = 0;

      return result;
    }

    sumOfNums += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
