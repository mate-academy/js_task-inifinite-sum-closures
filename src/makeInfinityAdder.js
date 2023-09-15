'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function add(...args) {
    if (args.length === 0) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += args.reduce((acc, num) => acc + num, 0);

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
