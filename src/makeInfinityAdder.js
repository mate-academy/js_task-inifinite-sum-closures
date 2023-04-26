'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let countSum = 0;

  return function f(num) {
    if (num !== undefined) {
      countSum += num;

      return f;
    }

    const saveSum = countSum;

    countSum = 0;

    return saveSum;
  };
};

module.exports = makeInfinityAdder;
