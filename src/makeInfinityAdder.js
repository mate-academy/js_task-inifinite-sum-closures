'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  function f(b) {
    if (b !== undefined) {
      amount += b;
    } else {
      const result = amount;

      amount = 0;

      return result;
    }

    return f;
  }

  return f;
}

module.exports = makeInfinityAdder;
