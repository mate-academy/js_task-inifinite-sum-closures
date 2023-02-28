'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  function adder(number) {
    if (number === undefined) {
      const copyTotalSum = totalSum;

      totalSum = 0;

      return copyTotalSum;
    }

    totalSum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
