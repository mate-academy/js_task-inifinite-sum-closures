'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function adder(value) {
    let sum = value;

    if (!sum) {
      return 0;
    }

    function innerAdder(nextValue) {
      if (typeof nextValue === 'undefined') {
        return sum;
      }

      sum += nextValue;

      return innerAdder;
    }

    return innerAdder;
  };
}

module.exports = makeInfinityAdder;
