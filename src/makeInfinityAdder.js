'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  function adder(valueA) {
    if (!arguments.length) {
      return 0;
    }

    return function(valueB) {
      if (!arguments.length) {
        return valueA;
      }

      return adder(valueA + valueB);
    };
  }

  return adder;
}

module.exports = makeInfinityAdder;
