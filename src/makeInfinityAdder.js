'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function init(x) {
    if (!x) {
      const copy = sum;

      sum = 0;

      return copy;
    }
    sum += x;

    return init;
  };
}

module.exports = makeInfinityAdder;
