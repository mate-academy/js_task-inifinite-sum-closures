'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (x) => {
    let amount = x;
    let buffer = amount;

    if (x === undefined) {
      return 0;
    }

    function sum(y) {
      if (y === undefined) {
        amount = 0;

        return buffer;
      }

      amount += y;
      buffer = amount;

      return sum;
    };

    sum[Symbol.toPrimitive] = (hint) => {
      return amount;
    };

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
