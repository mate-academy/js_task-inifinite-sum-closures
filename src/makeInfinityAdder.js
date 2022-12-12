'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function adder(a) {
    if (a !== undefined) {
      return function(b) {
        if (b !== undefined) {
          return adder(a + b);
        }

        return a;
      };
    }

    return 0;
  };
}

module.exports = makeInfinityAdder;
