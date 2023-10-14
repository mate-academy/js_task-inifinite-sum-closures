'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adding(value) {
    if (value === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += value;

    return adding;
  };
}

module.exports = makeInfinityAdder;
