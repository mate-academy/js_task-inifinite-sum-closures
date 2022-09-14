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
    total += x;

    const infinityAdder = (y) => {
      if (typeof y === 'number') {
        total += y;

        return infinityAdder;
      } else {
        const result = total;

        total = 0;

        return result;
      }
    };

    if (x) {
      return infinityAdder;
    } else {
      return 0;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
