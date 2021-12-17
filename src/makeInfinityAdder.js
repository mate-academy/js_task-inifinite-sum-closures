'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function looper(a) {
    if (a === undefined) {
      const temp = sum;

      sum = 0;

      return temp;
    }

    sum += a;

    return looper;
  }

  return looper;
}

module.exports = makeInfinityAdder;
