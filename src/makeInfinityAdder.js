'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  return function adder(a) {
    let sum = a;

    if (a === undefined) {
      return 0;
    }

    function foo(b) {
      if (b === undefined) {
        return sum;
      }
      sum += b;

      return foo;
    }

    return foo;
  };
}

module.exports = makeInfinityAdder;
