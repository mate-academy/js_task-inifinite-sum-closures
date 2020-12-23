'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function f(x) {
    if (x) {
      sum += x;

      return f;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return f;
}

module.exports = makeInfinityAdder;
