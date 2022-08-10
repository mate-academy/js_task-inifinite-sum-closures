'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function recursiveSum(num) {
    if (num === undefined) {
      const saveBeforClear = sum;

      sum = 0;

      return saveBeforClear;
    };
    sum += num;

    return recursiveSum;
  };
};

module.exports = makeInfinityAdder;
