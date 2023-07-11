'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  function adder(a) {
    if (arguments.length === 0) {
      return 0;
    }

    return function(b) {
      if (arguments.length === 0) {
        return a;
      }

      const sum = a + b;

      return adder(sum);
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
