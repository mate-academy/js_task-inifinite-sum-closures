'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (...num) => {
    if (num.length === 0) {
      const tmp = sum;

      sum = 0;

      return tmp;
    }

    sum = num.reduce((el1, el2) => el1 + el2, sum);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
