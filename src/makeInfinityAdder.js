'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = (x) => {
    if (x !== undefined) {
      amount += x;

      return adder;
    } else {
      const buffer = amount;

      amount = 0;

      return buffer;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
