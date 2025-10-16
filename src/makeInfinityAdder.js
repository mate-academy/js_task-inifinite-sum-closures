'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  function adder(add) {
    if (typeof add !== 'undefined') {
      sum += add;

      return adder;
    } else {
      const temp = sum;

      sum = 0;

      return temp;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
