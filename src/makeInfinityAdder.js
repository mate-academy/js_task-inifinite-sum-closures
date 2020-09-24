'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = function(x) {
    if (!x) {
      const a = sum;

      sum = 0;

      return a;
    } else {
      sum += x;

      return add;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
