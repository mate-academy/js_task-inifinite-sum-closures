'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function(a) {
    const sum1 = sum;

    if (a === undefined) {
      sum = 0;

      return sum1;
    }
    sum += a;

    return adder;
  };

  return adder;
}
module.exports = makeInfinityAdder;
