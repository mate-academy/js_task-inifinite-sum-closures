'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = (number) => {
    if (number === undefined) {
      const count = amount;

      amount = 0;

      return count;
    } else {
      amount += number;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
