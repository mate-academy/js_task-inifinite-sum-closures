'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function makeAdder(value) {
    if (value === undefined) {
      const copySum = sum;

      sum = 0;

      return copySum;
    }

    sum += value;

    return makeAdder;
  };
}

module.exports = makeInfinityAdder;
