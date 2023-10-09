'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function makeAdder(...args) {
    if (args.length === 0) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    } else {
      sum += args.reduce((acc, currValue) => acc + currValue, 0);

      return makeAdder;
    }
  }

  return makeAdder;
}

module.exports = makeInfinityAdder;
