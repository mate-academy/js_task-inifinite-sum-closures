'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(a) {
    if (a === undefined) {
      const added = sum;

      sum = 0;

      return added;
    }

    sum += a;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
