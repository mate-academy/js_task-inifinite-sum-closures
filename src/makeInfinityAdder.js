'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function count(value) {
    if (arguments.length === 0) {
      const counted = sum;

      sum = 0;

      return counted;
    }
    sum += value;

    return count;
  };
}

module.exports = makeInfinityAdder;
