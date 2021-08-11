'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const getSum = function(number) {
    if (number !== undefined) {
      sum += number;

      return getSum;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
