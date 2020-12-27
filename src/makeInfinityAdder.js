'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function plus(value) {
    if (value !== undefined) {
      sum += value;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }

    return plus;
  };
}

module.exports = makeInfinityAdder;
