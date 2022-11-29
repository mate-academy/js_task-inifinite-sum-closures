'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function addition(a) {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += a;

    return addition;
  }

  return addition;
}

module.exports = makeInfinityAdder;
