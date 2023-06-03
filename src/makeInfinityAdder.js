'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  return function getSumOfNumbers(...arg) {
    const resultSum = count;

    if (arg.length === 0) {
      count = 0;

      return resultSum;
    }

    count += arg.reduce((a, b) => a + b, 0);

    return getSumOfNumbers;
  };
}

module.exports = makeInfinityAdder;
