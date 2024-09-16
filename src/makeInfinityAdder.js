'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (a) => {
    if (a === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }
    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
