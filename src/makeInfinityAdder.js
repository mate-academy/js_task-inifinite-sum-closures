'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function foo(num) {
    if (num === undefined) {
      const sumToReturn = sum;

      sum = 0;

      return sumToReturn;
    }
    sum += num;

    return foo;
  };

  return foo;
}

module.exports = makeInfinityAdder;
