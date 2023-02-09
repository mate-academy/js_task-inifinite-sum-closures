'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (a) => {
    if (a !== undefined) {
      let sum = a;
      const inner = (b) => {
        if (b !== undefined) {
          sum += b;

          return inner;
        } else {
          return sum;
        }
      };

      return inner;
    } else {
      return 0;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
