'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function f(b) {
    if (arguments.length === 0) {
      const newRes = result;

      result = 0;

      return newRes;
    }
    result += b;

    return f;
  };
}

module.exports = makeInfinityAdder;
