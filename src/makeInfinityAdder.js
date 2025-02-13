'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(a) {
  let total = a !== undefined ? a : 0;

  const adder = (b) => {
    if (b === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += b;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
