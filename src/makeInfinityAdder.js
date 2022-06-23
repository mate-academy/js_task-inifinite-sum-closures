'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let prev = 0;

  return function adder(a) {
    if (a !== undefined) {
      prev += a;
    } else {
      const copyPrev = prev;

      prev = 0;

      return copyPrev;
    }

    return adder;
  };
}

module.exports = makeInfinityAdder;
