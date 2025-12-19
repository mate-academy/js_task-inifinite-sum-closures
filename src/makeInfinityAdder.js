'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  return function adder(n) {
    if (n === undefined) {
      const clipboard = amount;

      amount = 0;

      return clipboard;
    }

    amount += n;

    return adder;
  };
}

module.exports = makeInfinityAdder;
