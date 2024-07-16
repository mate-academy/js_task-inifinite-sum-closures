'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  function adder(data) {
    if (data === undefined) {
      const tempTotal = total;

      total = 0;

      return tempTotal;
    }

    if (typeof data !== 'number') {
      throw new Error('Data must be a number');
    } else {
      total += data;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
