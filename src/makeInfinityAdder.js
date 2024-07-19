'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (a, prev = sum) => {
    if (a == null) {
      sum = 0;

      return prev;
    } else {
      sum += a;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
