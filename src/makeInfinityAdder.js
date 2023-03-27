'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(nmb) {
    if (nmb === undefined) {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }

    sum += nmb;

    return add;
  };
}

module.exports = makeInfinityAdder;
