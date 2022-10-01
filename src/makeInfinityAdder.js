'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(a) {
    if (a === undefined) {
      const resAdder = sum;

      sum = 0;

      return resAdder;
    } else {
      sum += a;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
