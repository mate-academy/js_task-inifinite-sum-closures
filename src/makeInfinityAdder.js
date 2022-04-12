'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function returnFunction(x) {
    if (x === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += x;

      return returnFunction;
    }
  };
}

module.exports = makeInfinityAdder;
