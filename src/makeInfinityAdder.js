'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  return function adder(x) {
    if (!x) {
      const clear = count;

      count = 0;

      return clear;
    }

    count += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
