'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function f(first) {
    if (first === undefined) {
      const preResult = result;

      result = 0;

      return preResult;
    }
    result += +first;

    return f;
  };
}

module.exports = makeInfinityAdder;
