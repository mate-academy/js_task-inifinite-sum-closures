'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  return function adder(sum) {
    if (sum === undefined) {
      const total = count;

      count = 0;

      return total;
    } else {
      count += sum;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
