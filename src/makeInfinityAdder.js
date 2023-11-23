'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function adder(a) {
    if (a) {
      result += a;
    }

    if (a === undefined) {
      const lastResult = result;

      result = 0;

      return lastResult;
    }

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
