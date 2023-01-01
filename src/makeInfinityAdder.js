'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(num) {
    if (num === undefined) {
      const total = sum;
      sum = 0;

      return total;
    }

    sum += num;

    return add;
  }
}

module.exports = makeInfinityAdder;
