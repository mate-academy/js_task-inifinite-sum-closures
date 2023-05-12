'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  function adder(a) {
    if (arguments.length === 0) {
      return 0;
    }

    let currentSum = a;

    function f(b) {
      if (arguments.length === 0) {
        return currentSum;
      }

      currentSum += b;

      return f;
    }

    f.toString = function() {
      return currentSum;
    };

    return f;
  }

  return adder;
}

module.exports = makeInfinityAdder;
