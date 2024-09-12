'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (num === undefined) {
      const temp = sum;

      sum = 0;

      return temp;
    }
    sum += num;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
