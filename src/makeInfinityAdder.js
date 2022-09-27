'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  function adder(valueA) {
    if (!isFinite(valueA)) {
      return 0;
    }

    return function(valueB) {
      if (!isFinite(valueB)) {
        return valueA;
      }

      return adder(valueA + valueB);
    };
  }

  return adder;
}

module.exports = makeInfinityAdder;
