'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function first(x) {
    if (x === undefined) {
      const res = sum;

      sum = 0;

      return res;
    } else {
      sum = sum + x;

      return first;
    }
  };
};

module.exports = makeInfinityAdder;
