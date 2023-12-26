'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  function infinityAdder(b) {
    if (b !== undefined) {
      amount += b;
    } else {
      const result = amount;

      amount = 0;

      return result;
    }

    return infinityAdder;
  }

  return infinityAdder;
}

module.exports = makeInfinityAdder;
