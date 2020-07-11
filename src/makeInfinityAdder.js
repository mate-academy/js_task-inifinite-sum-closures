'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(x) {
    if (x === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += x;

      return add;
    }
  };
}

module.exports = makeInfinityAdder;
