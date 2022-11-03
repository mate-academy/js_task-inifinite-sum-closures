'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(a) {
    const tmp = sum;

    if (typeof a === 'undefined') {
      sum = 0;

      return tmp;
    }

    sum += a;

    return adder;
  };
}

module.exports = makeInfinityAdder;
