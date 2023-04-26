'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let countSum = 0;

  return function counter(num) {
    if (num !== undefined) {
      countSum += num;

      return counter;
    }

    const saveSum = countSum;

    countSum = 0;

    return saveSum;
  };
};

module.exports = makeInfinityAdder;
