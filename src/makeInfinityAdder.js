'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = function(a) {
    if (arguments.length === 0) {
      const result = amount;

      amount = 0;

      return result;
    }

    amount += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
