'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    const sumInside = sum;

    if (typeof num === 'undefined') {
      sum = 0;

      return sumInside;
    }

    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
