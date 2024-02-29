'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  function adder(count) {
    if (count === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += count;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
