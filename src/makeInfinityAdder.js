'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(a = 0) {
  let sum = a;
  const adder = (b) => {
    if (b === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      return makeInfinityAdder(sum + b);
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
