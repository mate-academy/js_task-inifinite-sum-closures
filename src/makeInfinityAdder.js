'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;
  const adder = (x) => {
    if (x === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += x;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
