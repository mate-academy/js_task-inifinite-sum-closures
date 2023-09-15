'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(a = 0) {
  let sum = a;
  let counter = 0;
  const adder = b => {
    if (b !== undefined) {
      sum += b;

      return adder;
    } else {
      counter = sum;
      sum = 0;

      return counter;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
