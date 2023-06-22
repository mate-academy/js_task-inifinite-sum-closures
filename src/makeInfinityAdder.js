'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function sum(a) {
    if (arguments.length === 0) {
      const lastRes = result;

      result = 0;

      return lastRes;
    }

    result += a;

    return sum;
  };
}

module.exports = makeInfinityAdder;
