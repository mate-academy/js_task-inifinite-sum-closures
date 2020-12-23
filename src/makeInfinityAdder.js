'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function(a) {
    let result = a;

    if (arguments.length === 0) {
      return 0;
    }

    function f(b) {
      if (arguments.length === 0) {
        return result;
      }
      result += b;

      return f;
    }

    return f;
  };
}

module.exports = makeInfinityAdder;
