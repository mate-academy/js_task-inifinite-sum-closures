'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  function adder() {
    if (Object.values(arguments).length === 0) {
      const sum = amount;

      amount = 0;

      return sum;
    }

    amount += Object.values(arguments)[0];

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
