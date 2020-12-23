'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (num) => {
    if (num) {
      sum += num;

      return adder;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
