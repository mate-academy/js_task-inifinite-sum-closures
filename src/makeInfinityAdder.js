'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const addFunc = function f(x) {
    if (x) {
      sum += x;

      return f;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return addFunc;
}

module.exports = makeInfinityAdder;
