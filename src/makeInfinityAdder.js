'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  return function adder(a) {
    if (!a) {
      return 0;
    }

    return function(b) {
      if (b === undefined) {
        return a;
      }

      return adder(a + b);
    };
  };
}

module.exports = makeInfinityAdder;
