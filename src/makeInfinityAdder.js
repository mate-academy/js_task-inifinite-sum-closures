'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sumStart = 0;

  const adder = (num) => {
    const currentSum = sumStart;

    if (num !== undefined) {
      sumStart += num;

      return adder;
    } else {
      sumStart = 0;

      return currentSum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
