'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  return function adder(...args) {
    if (args.length === 0) {
      const returnTotalSum = totalSum;

      totalSum = 0;

      return returnTotalSum;
    }

    totalSum += Number(args);

    return adder;
  };
}

module.exports = makeInfinityAdder;
