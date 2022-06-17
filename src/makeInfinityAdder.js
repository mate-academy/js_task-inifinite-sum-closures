'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return (a) => {
    let sum = a;

    if (sum === undefined) {
      return 0;
    }

    return function adder(b) {
      if (b !== undefined) {
        sum += b;
      } else {
        return sum;
      };

      return adder;
    };
  };
}

module.exports = makeInfinityAdder;
