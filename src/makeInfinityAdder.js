'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;
  const adder = (num) => {
    if (num === undefined) {
      const copySum = sum;

      sum = 0;

      return copySum;
    }
    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
