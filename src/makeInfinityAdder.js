'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function makeAdder(a) {
    if (a === undefined) {
      const sumReturn = sum;

      sum = 0;

      return sumReturn;
    }
    sum += a;

    return makeAdder;
  };
}

module.exports = makeInfinityAdder;
