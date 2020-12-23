'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function ADD(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += num;

      return ADD;
    }
  };
}

module.exports = makeInfinityAdder;
