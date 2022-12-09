'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function adder(a) {
    if (a >= 0) {
      return function(b) {
        if (b >= 0) {
          return adder(a + b);
        }

        return a;
      };
    }

    return 0;
  };
}

module.exports = makeInfinityAdder;
