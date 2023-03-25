'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function cyclingFunc(param) {
    if (param !== undefined) {
      sum += param;

      return cyclingFunc;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };
}

module.exports = makeInfinityAdder;
