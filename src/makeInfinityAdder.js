'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summ = 0;

  return function sum(a) {
    if (a === undefined) {
      const output = summ;

      summ = 0;

      return output;
    }
    summ += a;

    return sum;
  };
}

module.exports = makeInfinityAdder;
