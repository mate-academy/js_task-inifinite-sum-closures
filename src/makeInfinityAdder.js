'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  return function adder(x) {
    const currentCount = count;

    if (x !== undefined) {
      count += x;

      return adder;
    }
    count = 0;

    return currentCount;
  };
}

module.exports = makeInfinityAdder;
