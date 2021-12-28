'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const getSum = (...args) => {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += args[0];

      return getSum;
    }
  };

  return getSum;
}

module.exports = makeInfinityAdder;
