'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const adder = (num) => {
    if (num === undefined) {
      const localTotal = total;

      total = 0;

      return localTotal;
    }

    total += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
