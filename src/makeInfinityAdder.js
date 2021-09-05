'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function makeAdder(x) {
    let sum = 0;

    if (!x) {
      sum = result;
      result = 0;

      return sum;
    }

    result += x;

    return makeAdder;
  };
}

module.exports = makeInfinityAdder;
