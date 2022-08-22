'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (typeof num !== 'undefined') {
      sum += num;

      return adder;
    }

    const res = sum;

    sum = 0;

    return res;
  };
}

module.exports = makeInfinityAdder;
