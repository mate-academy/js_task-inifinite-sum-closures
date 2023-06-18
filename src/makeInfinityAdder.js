'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function sum(a) {
    if (arguments.length === 0) {
      return 0;
    }

    return function(b) {
      return arguments.length > 0
        ? sum(a + b)
        : a;
    };
  };
}

module.exports = makeInfinityAdder;
