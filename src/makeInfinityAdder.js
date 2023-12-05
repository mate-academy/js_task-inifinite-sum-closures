'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (x = null) => {
    if (x === null) {
      const sum = adder.sum || 0;

      adder.sum = 0;

      return sum;
    } else {
      adder.sum = (adder.sum || 0) + x;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
