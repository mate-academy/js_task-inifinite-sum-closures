'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  return function sum(a) {
    if (a === undefined) {
      const output = total;

      total = 0;

      return output;
    }
    total += a;

    return sum;
  };
}

module.exports = makeInfinityAdder;
