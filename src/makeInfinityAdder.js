'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(a) {
  let summ = a || 0;

  function adder(b) {
    if (b === undefined) {
      const result = summ;

      summ = 0;

      return result;
    }
    summ += b;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
