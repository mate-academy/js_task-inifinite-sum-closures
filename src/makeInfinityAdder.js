'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let res = 0;

  return function getSum(parameter) {
    const count = parameter;

    if (count === undefined) {
      const sum = res;

      res = 0;

      return sum;
    }

    res += count;

    return getSum;
  };
}

module.exports = makeInfinityAdder;
