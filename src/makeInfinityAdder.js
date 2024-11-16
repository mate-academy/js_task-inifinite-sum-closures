'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let nums = [];

  const adder = (a) => {
    if (a === undefined) {
      const sum = nums.reduce((prev, elem) => {
        return prev + elem;
      }, 0);

      nums = [];

      return sum;
    }

    nums.push(a);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
