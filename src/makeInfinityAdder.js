'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function getSum(...args) {
    if (args.length === 0) {
      const copySum = sum;

      sum = 0;

      return copySum;
    }

    sum += args[0];

    return getSum;
  };
}

module.exports = makeInfinityAdder;
