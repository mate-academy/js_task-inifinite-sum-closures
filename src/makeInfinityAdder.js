'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  function adder(item) {
    if (item === undefined) {
      const result = total;

      total = 0;

      return result;
    }
    total += item;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
