'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = (value) => {
    if (value === undefined) {
      const count = amount;

      amount = 0;

      return count;
    } else {
      amount += value;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
