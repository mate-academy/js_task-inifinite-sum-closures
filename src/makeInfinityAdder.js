'use strict';

/***
 *
 * @return {function}
 */
// - Really wired way to calculate
// |-- the sum of numbers, do you agree?))
function makeInfinityAdder() {
  let total = 0;

  function adder(x) {
    if (x || typeof x === 'number') {
      total += x;

      return adder;
    } else {
      const beforeReset = total;

      total = 0;

      return beforeReset;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
