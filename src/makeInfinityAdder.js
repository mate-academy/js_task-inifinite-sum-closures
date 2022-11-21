'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function(n) {
    let sum = n || 0;

    if (n === undefined) {
      return sum;
    }

    return function adder(n2) {
      if (n2 === undefined) {
        return sum;
      }

      sum += n2;

      return adder;
    };
  };
}

module.exports = makeInfinityAdder;
