'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalAmount = 0;

  const adder = (a) => {
    if (typeof a === 'number' && !Number.isNaN(a)) {
      totalAmount += a;

      return adder;
    } else {
      const result = totalAmount;

      totalAmount = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
