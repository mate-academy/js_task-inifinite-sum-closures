'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function getSum(number) {
    if (number === undefined) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    }
    sum += number;

    return getSum;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
