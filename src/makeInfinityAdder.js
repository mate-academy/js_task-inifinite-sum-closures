'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  return function adder(a) {
    if (a === undefined) {
      return 0;
    }

    let sum = a;

    return function inner(b) {
      if (b === undefined) {
        const currentSum = sum;

        sum = 0;

        return currentSum;
      }

      sum += b;

      return inner;
    };
  };
}
module.exports = makeAdder;
